// SHELLS HACK - Basic Authentication for /training/*
// 
// ユーザー名とパスワードを変更してください
const USERS = {
  "tanbablack": "mmntmr"  // ← パスワードを変更
};

export default async (request, context) => {
  const authorization = request.headers.get("authorization");
  
  if (authorization) {
    const [scheme, encoded] = authorization.split(" ");
    if (scheme === "Basic") {
      try {
        const decoded = atob(encoded);
        const [user, pass] = decoded.split(":");
        if (USERS[user] && USERS[user] === pass) {
          return context.next();
        }
      } catch (e) {
        // デコードエラーは無視
      }
    }
  }
  
  return new Response("🔒 管理画面へのアクセスには認証が必要です", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="SHELLS HACK Admin"',
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
