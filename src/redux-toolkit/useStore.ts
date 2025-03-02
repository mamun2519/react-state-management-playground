import { configureStore, createSlice } from "@reduxjs/toolkit";
import { User } from "../type";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

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

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export typed versions of hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
