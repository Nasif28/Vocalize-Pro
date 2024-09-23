"use client";
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import store from "./store/store";
import React from "react";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

const ReduxWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { SessionWrapper, ReduxWrapper };
