const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    entry: './src/frontend/main.js'  // 변경하려는 엔트리 파일 경로
  },
  outputDir: './src/frontend/dist' // dist 생성 경로
})
