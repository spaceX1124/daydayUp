import { FormSchema } from '@/components/common/BasicForm'
export const schemas:FormSchema[] = [
  {
    key: 'key1',
    label: '复选框',
    component: 'Checkbox',
    dataList: [
      {
        label: '选项一',
        value: 1
      },
      {
        label: '选项二',
        value: 2
      },
      {
        label: '选项三',
        value: 3
      }
    ],
    required: true
  }
]