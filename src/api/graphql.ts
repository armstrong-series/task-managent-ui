import axios from 'axios';
import type { AxiosResponse } from 'axios';


interface LoginResponse {
  data: {
    login: {
      token: string;
      user: {
        id: string;
        email: string;
      };
    };
  };
}


const graphqlClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string, 
    headers: {
      'Content-Type': 'application/json',
    },
  })


export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const query = `
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          id
          email
        }
      }
    }
  `;

  const response: AxiosResponse<LoginResponse> = await graphqlClient.post('', {
    query,
    variables: { email, password },
  });

  if (response.data?.data?.login) {
    return response.data;
  }
  throw new Error('Login failed');
};