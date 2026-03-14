// SHELLS HACK - Basic Authentication for /admin/*
//
// Netlify環境変数で設定:
//   BASIC_AUTH_USER → ユーザー名
//   BASIC_AUTH_PASS → パスワード

export default async (request, context) => {
  const authorization = request.headers.get("authorization");
  
  const expectedUser = Netlify.env.get("BASIC_AUTH_USER");
  const expectedPass = Netlify.env.get("BASIC_AUTH_PASS");

  if (!expectedUser || !expectedPass) {
    return context.next();
  }

  if (authorization) {
    const [scheme, encoded] = authorization.split(" ");
    if (scheme === "Basic") {
      try {
        const decoded = atob(encoded);
        const [user, pass] = decoded.split(":");
        if (user === expectedUser && pass === expectedPass) {
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
