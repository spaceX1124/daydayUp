import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import { creatPlugin } from '../plugins'
interface DefineOptions {
  overrides?: UserConfig
}
export function defineAppConfig<T extends DefineOptions> (defineOptions: T ) {
  const { overrides } = defineOptions
  const common = {
    root: process.cwd(), //
    base: './', // 开发或生产环境服务的公共基础路径
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `
    //       @import "@/assets/styles/variables.scss";
    //       @import "@/assets/styles/mixin.scss";
    //      `
    //     }
    //   }
    // },
    server: {
      port: 9988,
      open: false,
      https: false
    }
  }
  return defineConfig(({ mode }) => {
    const plugins = creatPlugin()
    const defaultConfig = {
      plugins
    }
    const config = mergeConfig(defaultConfig, common)
    return mergeConfig(config, overrides)
  })
}