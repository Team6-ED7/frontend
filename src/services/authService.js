import { postData } from '../../api/client';

export const register = async (credentials) => {
  try {
    const { data } = await postData('/auth/register', credentials);
    return data;
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw error;
  }
};
