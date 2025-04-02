
export interface TaskForm {
    title: string;
    status: string;
    due_date: string;
    description: string;
  }
  
  export interface TaskData {
    id: string;
    title: string;
    status: string;
    due_date: string;
    description: string | null;
  }

  export interface Task {
    id: string;
    title: string;
    status: string;
    description: string | null;
    due_date: string;
    user_id: string;
  }
  
  export interface PaginatorInfo {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasMorePages: boolean;
  }
  
  export interface TasksResponse {
    data: Task[];
    paginatorInfo: PaginatorInfo;
  }