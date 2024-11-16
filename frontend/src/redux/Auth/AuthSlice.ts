import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiUrl } from '../../utils/ApiUrl';
import { Login } from '@mui/icons-material';

export interface UserData {}

interface UserState {
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  isCheckAuth: boolean;
  user: UserData | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  isAuthLoading: false,
  isCheckAuth: false,
  user: null
};

export const RegisterUser = createAsyncThunk(
  '/register',
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${ApiUrl}/api/auth/register`,
        formData,
        {
          withCredentials: true
        }
      );
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      return rejectWithValue(errorMessage);
    }
  }
);

export const LoginUser = createAsyncThunk(
  '/login',
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${ApiUrl}/api/auth/login`, formData, {
        withCredentials: true
      });
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      return rejectWithValue(errorMessage);
    }
  }
);

export const CheckAuth = createAsyncThunk('/checkauth', async () => {
  const response = await axios.get(`${ApiUrl}/api/auth/check-auth`, {
    withCredentials: true
  });
  return response.data;
});

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUser: (state, action) => {}
  },
  extraReducers: (builder) => {
    //Register User Cases

    builder.addCase(RegisterUser.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(RegisterUser.fulfilled, (state) => {
      state.isAuthLoading = false;
    });
    builder.addCase(RegisterUser.rejected, (state) => {
      state.isAuthLoading = false;
    });

    //Login User Cases

    builder.addCase(LoginUser.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state) => {
      state.isAuthLoading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(LoginUser.rejected, (state) => {
      state.isAuthLoading = false;
    });

    //Check Auth Cases
    builder.addCase(CheckAuth.pending, (state) => {
      state.isCheckAuth = true;
    });
    builder.addCase(CheckAuth.fulfilled, (state) => {
      state.isCheckAuth = false;
      state.isAuthenticated = true;
    });
    builder.addCase(CheckAuth.rejected, (state) => {
      state.isCheckAuth = false;
      state.isAuthenticated = false;
    });
  }
});

export default AuthSlice.reducer;
