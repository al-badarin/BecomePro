import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
  try {
    const result = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });

    return result;
  } catch (error) {
    console.error('Login failed:', error);

    throw error;
  }
};

export const register = async (email, username, password) => {
  try {
    const result = await request.post(`${baseUrl}/register`, {
      email,
      username,
      password,
    });

    return result;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await request.get(`${baseUrl}/logout`);
  } catch (error) {
    console.error('Logout failed:', error);

    throw error;
  }
};
