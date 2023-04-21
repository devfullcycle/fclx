"use client";

import { Session } from "next-auth";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

type SessionProviderProps = PropsWithChildren<{
  session: Session | null;
}>;

export function SessionProvider(props: SessionProviderProps) {
  return (
    <NextAuthSessionProvider session={props.session}>
      {props.children}
    </NextAuthSessionProvider>
  );
}
