import { FormEnum } from '@/enums/form.ts'

/**
 * 自定义渲染函数所需参数
 * */
interface CellRenderParams {
  column: TableColumn, // 表头
  rowIndex: number // 当前行索引
}
/**
 * 渲染函数类型
 * */
export type CellRenderType = (params: CellRenderParams) => VNode
/**
 * 表格/表单需要的数据格式
 * */
export interface TableColumn {
  key: string;
  title: string; // 名称
  component?: typeof FormEnum[keyof typeof FormEnum]; // 组件类型
  width?: string; // 列宽度，不设置当前列宽就是自适应的
  minWidth?: string; // 列最小宽
  type?: 'seq' | 'checkbox' | 'radio' | 'expand'; // 序号 | 复选框 | 单选框 | 展开行
  cellRender?: CellRenderType;
  tableHidden?: boolean; // 表格中是否隐藏
  searchHidden?: boolean; // 搜索框中是否隐藏
  formHidden?: boolean; // 新增表单中是否隐藏
}

// @todo 后面记到挪到组件中取，在组件中取暴露，可参考BasicForm