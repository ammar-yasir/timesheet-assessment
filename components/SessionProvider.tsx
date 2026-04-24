"use client";
import { ReactNode } from "react";
import { SessionProvider as AuthSessionProvider } from "next-auth/react";

export function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <AuthSessionProvider>
      {children}
    </AuthSessionProvider>
  );
}
