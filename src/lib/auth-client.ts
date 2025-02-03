import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  baseURL: "https://time-bird.vercel.app" // the base url of your auth server
})

export const { signIn, signUp, useSession } = createAuthClient()
