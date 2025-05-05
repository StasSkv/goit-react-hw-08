import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', newUser);
    setAuthHeader(response.data.token);
    toast.success('Вітаємо, ви успішно зареєструвались!');
    return response.data;
  } catch (error) {
    toast.error('Помилка реєстрації. Спробуйте ще раз!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', user);
    setAuthHeader(response.data.token);
    toast.success('Вітаємо, ви успішно увійшли!');
    return response.data;
  } catch (error) {
    toast.error('Невірні дані для входу.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    toast.success('До зустрічі!');
    clearAuthHeader();
  } catch (error) {
    toast.error('Помилка при виході. Спробуйте ще раз!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    toast.error('Користувач не знайдений!');
    return thunkAPI.rejectWithValue('Користувач не знайдений');
  }
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    toast.error('Помилка при оновленні інформації!');
    return thunkAPI.rejectWithValue(error.message);
  }
});
