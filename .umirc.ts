import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  title: 'Carmen',
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  styles: [
    'https://fonts.font.im/css2?family=Noto+Sans+SC:wght@300;400&display=swap',
  ],
  // 是否启用按需加载
  // dynamicImport: {},
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  // targets: {
  //   ie: 11,
  // },
  theme: {
    '@primary-color': '#000000',
  },
  proxy: {
    '/api': {
      target: 'http://128.1.1.1:8010/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      secure: false,
    },
  },
  manifest: {
    basePath: '/',
  },
  mock: false,
});
