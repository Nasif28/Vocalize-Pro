import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default page;
