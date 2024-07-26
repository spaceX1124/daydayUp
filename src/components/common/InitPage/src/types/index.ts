import { BasicFormProps, FormActionType } from '@/components/common/BasicForm/src/types/form.ts'
import { BasicTableProps, TableActionType } from '@/components/common/VTable/src/types/table.ts'

export interface EmitEvent {
  (e: 'register', tableAction: TableActionType, formAction: FormActionType): void;
}

export interface BasicPageProps {
  tableProps?:BasicTableProps;
  formProps?:BasicFormProps
}

export interface PageActionType {
  tableAction?:TableActionType;
  formAction?: FormActionType
}