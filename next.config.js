/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO: 重新導向到另一伺服器：把所有以 /api/ 開頭的請求重新導向到另一個伺服器上。這裡的設定將會把所有這樣的請求都重新導向到 http://localhost:3004/ 下。:path* 是一個動態路徑參數，它允許匹配任何路徑。
  // TODO: https://www.propelauth.com/post/avoiding-cors-issues-in-react-next-js
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // destination: "http://localhost:3004/:path*",
        destination:
          "https://01ebde40d361d5e1f75f3bb5fabf1990.serveo.net/:path*",
        destination:
          "https://f9f24305bfce74d119522a066f5ff791.serveo.net/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
