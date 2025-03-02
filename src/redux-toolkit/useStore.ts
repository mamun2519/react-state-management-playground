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
