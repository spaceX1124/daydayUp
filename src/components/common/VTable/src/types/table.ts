import { TableColumn } from '@/types/table.ts'

/**
 * 分页信息类型
 * */
export interface PaginationInfo {
  pageNum: number; // 当前页数
  pageSize: number; // 每页显示条目个数
}

/**
 * 通过从外面传递以下参数可控制表格的一些表现能力
 * */
export interface BasicTableProps {
  columns?: TableColumn[]; // 表头字段
  tableData?: Recordable[]; // 表格数据
  seqHidden?: boolean; // 隐藏序号
  paginationHidden?: boolean; // 隐藏分页
  paginationInfo?: PaginationInfo; // 分页信息
  virtualScroll?: boolean; // 是否开启虚拟滚动
  stripe?: boolean; // 是否带有斑马纹
  border?: boolean | 'full' | 'outer' | 'inner' | 'none'; // 边框
}

export interface TableActionType {
  setProps: (props: BasicTableProps) => void;
  setLoading: (loading: boolean) => void;
}