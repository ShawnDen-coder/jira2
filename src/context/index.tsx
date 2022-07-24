import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
// @ts-ignore
import { QueryClienProvider, QueryClient } from "react-query";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    // <QueryClienProvider client={new QueryClient()}>
    <AuthProvider>{children}</AuthProvider>
    // </QueryClienProvider>
  );
};
