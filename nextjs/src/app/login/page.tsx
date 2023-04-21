"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { status: statusAuth } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (statusAuth === "authenticated") {
      router.push("/");
    }
    if (statusAuth === "unauthenticated") {
      signIn("keycloak");
    }
  }, [statusAuth, router]);

  return <div>Carregando...</div>;
}
