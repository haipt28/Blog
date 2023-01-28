export interface CreateTodoListModal {
  Title: string;
  Task: string;
  StartTime?: Date;
  EndTime?: Date;
}
export interface UpdateTodoListModal {
  ID: string;
  Title?: string;
  Task?: string;
  StartTime?: Date;
  EndTime?: Date;
}
