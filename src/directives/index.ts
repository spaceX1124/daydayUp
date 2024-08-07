import { type App } from 'vue'
import { permission } from '@/directives/permission'
import { loading } from '@/directives/loading'

// 注册全局自定义指令
export function directives (app: App) {
  console.log(app, 'app')
  app.directive('permission', permission)
  app.directive('customLoading', loading)
}