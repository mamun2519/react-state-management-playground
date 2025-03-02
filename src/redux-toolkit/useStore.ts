import { createSlice } from "@reduxjs/toolkit";
import { User } from "../type";

interface UserState {
  user: User | null;
  demoString: string;
}

interface UserAction {
  logIn: (user: User) => void;
  logOut: () => void;
  updateDemoString: (demoString: string) => void;
}

const initialState: UserState = {
  user: null,
  demoString: "demo",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    updateDemoString: (state, action) => {
      state.demoString = action.payload;
    },
  },
});
