const path = require("path");
const distDir = path.resolve(__dirname, "./dist");

module.exports = function() {
  return {
    build: {
      distDir: distDir,
      devPath: "http://localhost:4000" // devServer URL or html dir
    },
    ctx: {},
    tauri: {
      embeddedServer: {
        active: true
      },
      bundle: {
        active: true
      },
      whitelist: {
        all: true
      },
      window: {
        title: "Yummer",
        width: 800,
        height: 480
      },
      security: {
        csp:
          "default-src data: filesystem: ws: http: https: 'unsafe-eval' 'unsafe-inline'"
      },
      edge: {
        active: true
      },
      automaticStart: {
        active: true
      }
    }
  };
};
