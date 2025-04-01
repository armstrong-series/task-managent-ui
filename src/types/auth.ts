
export interface User {
    id: string;
    email: string;
  }
  
  export interface AuthData {
    token: string;
    message: string;   
    success: boolean;
    user: User;
  }
  
  export interface AuthForm {
    email: string;
    password: string;
  } 