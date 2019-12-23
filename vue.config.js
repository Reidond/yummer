module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        vuetify$: "vuetify/lib"
      }
    }
  }
};
