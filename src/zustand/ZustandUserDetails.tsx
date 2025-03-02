import React from "react";
import useUserStore from "./useStore";

const ZustandUserDetails = () => {
  const user = useUserStore((state) => state.user);
  const logOut = useUserStore((state) => state.logOut);
  const logIn = useUserStore((state) => state.logIn);
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default ZustandUserDetails;
