import React from "react";
import useUserStore from "./useStore";

const ZustandUserDetails = () => {
  const user = useUserStore((state) => state.user);
  const logOut = useUserStore((state) => state.logOut);
  const logIn = useUserStore((state) => state.logIn);

  const updateDemoString = useUserStore((state) => state.updateDemoString);

  const handleLogin = async (userId: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();
    logIn(user);
  };
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Role: {user?.role}</p>

      <br />

      <button onClick={() => handleLogin("1")}>Log In</button>
      <button onClick={logOut}>Log Out</button>
      <br />

      <button onClick={() => updateDemoString("Hello world" + Math.random())}>
        Update Demo String
      </button>
    </div>
  );
};

export default ZustandUserDetails;
