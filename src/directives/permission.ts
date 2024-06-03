import { type DirectiveBinding } from 'vue'
// 对象式的指令

export const permission = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    console.log(el, 'el')
    console.log(binding, 'binding')
  }
}