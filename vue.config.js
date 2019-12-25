module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        vuetify$: "vuetify/lib"
      }
    }
  },
  chainWebpack: config => {
    require("@tauri-apps/tauri-webpack").chain(config);
  }
};
