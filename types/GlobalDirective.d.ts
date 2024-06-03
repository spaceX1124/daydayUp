import { DirectiveBinding } from 'vue'
declare module 'vue' {
  interface GlobalComponents {
    'permission': DirectiveBinding & { value?: string; }
  }
}