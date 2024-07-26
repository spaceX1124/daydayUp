import type { Component, VNodeProps } from 'vue'
import { type InputEmitsType } from '../components/Input.vue'
import { type SelectEmitsType } from '../components/Select.vue'

type ExtractPropTypes<T extends Component> = T extends new (...args: any) => any
  ? Omit<InstanceType<T>['$props']['options'], (keyof VNodeProps | 'schema')>
  : never;

/**
 * 注：typeof import('element-plus/es/components/input')['default']得到的是input组件的构造函数类型，
 * 这个构造函数可以用来创建Vue组件实例，接收props、提供模板、方法、生命周期钩子组件、计算属性等Vue组件的所有特性
 * InstanceType<T>， 获取构造函数的返回的实例类型，InstanceType<T>['$props']拿到的就是实例中的所有props
 */

export interface ComponentProps {
  Input: ExtractPropTypes<typeof import('../components/Input.vue')['default']>;
  Select: ExtractPropTypes<typeof import('../components/Select.vue')['default']>;
  // Checkbox: ExtractPropTypes<typeof import('../components/Checkbox.vue')['default']>;
}

export type ComponentType = keyof ComponentProps;

export interface ComponentEmits {
  Input: InputEmitsType;
  Select: SelectEmitsType;
  // Checkbox: ExtractEmitTypes<typeof import('../components/Checkbox.vue')['default']>;
}
