import React from "react";
import { useAppDispatch, useAppSelector } from "./useStore";

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
  return <div></div>;
};

export default ReduxUserDetails;
