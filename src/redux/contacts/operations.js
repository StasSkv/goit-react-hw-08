import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    toast.error('Помилка при завантаженні контактів');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact);
    toast.success('Контакт успішно додано!');
    return response.data;
  } catch (error) {
    toast.error('Помилка при додаванні контакту!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Контакт успішно видалено!');
      return response.data;
    } catch (error) {
      toast.error('Помилка при видаленні контакту!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success('Контакт успішно оновлено!');
      return response.data;
    } catch (error) {
      toast.error('Помилка при оновленні контакту!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
