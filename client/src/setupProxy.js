const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     ["/api", "/auth/google"],
//     createProxyMiddleware({
//       target: "http://localhost:5000",
//       changeOrigin: true,
//     })
//   );
// };
module.exports = function (app) {
  app.use(
    ["/auth/google", "/api/*"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
// module.exports = function (app) {
//   app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
//   app.use(proxy("/api/surveys/", { target: "http://localhost:5000" }));
//   app.use(proxy("/api/*", { target: "http://localhost:5000" }));
// };

// module.exports = function (app) {
//   app.use(
//     ["/api", "/auth/google"],
//     proxy({ target: "http://localhost/5000", changeOrigin: true })
//   );
//   app.use(
//     ["/api", "/surveys"],
//     proxy({ target: "http://localhost/5000", changeOrigin: true })
//   );
// };
