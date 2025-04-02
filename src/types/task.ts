
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