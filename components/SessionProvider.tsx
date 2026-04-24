"use client";

import { ReactNode } from "react";
import { SessionProvider as AuthSessionProvider } from "next-auth/react";

/**
 * Session Provider wrapper component for Auth.js
 * 
 * Enables useSession() hook throughout the application
 * Should wrap your entire app in layout.tsx
 */
export function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <AuthSessionProvider>
      {children}
    </AuthSessionProvider>
  );
}
