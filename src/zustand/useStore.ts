import { create } from "zustand";
import { User } from "../type";

type Store = {
  user: User | null;
  demoString: string;
};

type Action = {
  logIn: (user: User) => void;
  logOut: () => void;
  updateDemoString: (demoString: string) => void;
};

const useUserStore = create<Store & Action>((set) => ({
  user: null,
  demoString: "demo",
  logIn: (user) => set({ user }),
  logOut: () => set({ user: null }),
  updateDemoString: (demoString) => set({ demoString }),
}));

export default useUserStore;
