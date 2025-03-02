import React from "react";
import {
  logIn,
  logOut,
  updateDemoString,
  useAppDispatch,
  useAppSelector,
} from "./useStore";

const ReduxUserDetails = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const handleLogin = async (userId: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();
    dispatch(logIn(user));
  };
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Role: {user?.role}</p>
      <button onClick={() => handleLogin("1")}>Log In</button>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
      <button onClick={() => dispatch(updateDemoString("Hello world"))}>
        Update Demo Text
      </button>
    </div>
  );
};

export default ReduxUserDetails;
