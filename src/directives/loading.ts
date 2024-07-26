import { type DirectiveBinding } from 'vue'
// 对象式的指令

export const loading = {
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    console.log(el, 'el11')
    console.log(binding, 'binding')
    const loadingEle = document.createElement('div')
    loadingEle.textContent = '憨憨'
    el.appendChild(loadingEle)
  },
  updated (el: HTMLElement, binding: DirectiveBinding) {
    console.log('变了嘛12321', el, binding)
  }
}