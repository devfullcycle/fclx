import KeycloakProvider from "next-auth/providers/keycloak";

export const authConfig = {
    providers: [
      KeycloakProvider({
        clientId: process.env.KEYCLOAK_CLIENT_ID as string,
        clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
        issuer: process.env.KEYCLOAK_ISSUER as string,
      }),
    ],
  };