import { TableColumn } from '@/types/table.ts'
import { FormEnum } from '@/enums/form.ts'
// 定义表头数据
export const columnList:TableColumn[] = [
  {
    key: 'name1',
    title: '姓名1',
    component: FormEnum.MyInput
  },
  {
    key: 'name2',
    title: '姓名2',
    component: FormEnum.MyInput
  },
  {
    key: 'name3',
    title: '姓名3',
    component: FormEnum.MyInput
  },
  {
    key: 'name4',
    title: '姓名4',
    component: FormEnum.MyInput
  }
]