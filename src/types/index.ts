import { CellRenderType } from '@/types/table.ts'
import { type ComponentProps, ComponentEmits, ComponentType } from '@/components/common/BasicForm'
import { VNode } from 'vue'
import type { FormItemRule } from 'element-plus'

/**
 * 异步请求及字段取值自定义
 * */
interface AsyncType {
  label?: string; // 可自定义名称
  value?: string; // 可自定义值
  url?: string; // 接口地址
  data?: Global.Recordable // 接口参数
}
type SlotRender = (() => VNode | string) | VNode | string
/**
 * 组件渲染所需插槽
 * */
interface renderComponentSlot{
  slotName: string;
  slotRender: SlotRender
}
/**
 * 自定义rule的数据可能需要表单数据和当前字段信息
 * */
interface DynamicRules {
  formModel: Global.Recordable;
  schema: Common.BasicParams
}
/**
 * 栅格样式类型
 * */
interface ColEx {
  span?: number; // 栅格占据的列数
  offset?: number; // 栅格左侧的间隔格数
  xs?: number; // <768px
  sm?: number; // ≥768px
  md?: number; // ≥992px
  lg?: number; // ≥1200px
  xl?: number; // ≥1920px
}
/**
 * 通用的命名空间
 * */
export namespace Common {
  // 表格/表单所需数据格式
  export interface BasicParams<T extends ComponentType = ComponentType> {
    key: string; // （回显表格数据所需key | 表单绑定所需要的key）
    component: T; // 组件类型
    keyArr?: string[]; //  多值的时候，需要key一一对应
    title?: string; // 名称
    componentProps?: ComponentProps[T] // 组件props参数
    componentEmits?:ComponentEmits[T],
    renderComponentSlot?: renderComponentSlot | renderComponentSlot[]; // 组件插槽
    width?: string; // 列宽度，不设置当前列宽就是自适应的,用于表格列宽
    minWidth?: string; // 列最小宽
    type?: 'seq' | 'checkbox' | 'radio' | 'expand'; // 序号 | 复选框 | 单选框 | 展开行
    cellRender?: CellRenderType;
    search?: boolean; // 该字段是否在搜索框中
    tableHidden?: boolean; // 表格中是否隐藏
    formHidden?: boolean; // 新增表单中是否隐藏
    async?:AsyncType; // 异步请求
    dataList?: List[]; // 需要本地list数据
    dynamicRules?:(params?: DynamicRules) => FormItemRule[]; // 自定义校验规则
    defaultValue?: string | string[] // 默认值
    required?: boolean; // 是否必填
    colSpan?: ColEx;// 字段栅格布局样式，用于表单布局
  }
  // 数组格式
  export interface List {
    label: string;
    value: any;
  }
}