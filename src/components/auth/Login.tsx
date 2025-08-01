"use client";

import { Suspense } from "react";
import AuthTabs from "./AuthTabs";

const Login = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthTabs />
    </Suspense>
  );
};

export default Login;
