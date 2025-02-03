"use client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { authClient } from "~/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await authClient.signIn.email(
      {
        email: email,
        password: password,
      },
      {
        onRequest() {
          setIsLoading(true)
        },
        onSuccess: async (ctx) => {
          setIsLoading(false)
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const userData = await ctx.data.user;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          router.push(`/home/${userData.id}`);
        },
      },
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex h-screen justify-center">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="flex h-full items-center bg-gray-900 bg-opacity-40 px-20">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Timebird
              </h2>

              <p className="mt-3 max-w-xl text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="mx-auto flex justify-center">
                <img
                  className="h-7 w-auto sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@example.com"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-blue-500 hover:underline focus:text-blue-500"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>

                <div className="mt-6">
                  <Button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className="w-full transform rounded-lg bg-blue-500 px-4 py-2 tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    {isLoading ? (<Loader2 className="animate-spin" />) : "Sign In"}
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-400">
                Don&apos;t have an account yet?
                <a
                  href="#"
                  className="text-blue-500 hover:underline focus:underline focus:outline-none"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
