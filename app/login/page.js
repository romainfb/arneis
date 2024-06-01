"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response?.error) {
        setLoginError(response.error);
        return;
      } else {
        router.push("/");
      }
    } catch (error) {
      setLoginError(error.message || "Login failed");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border p-6 shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">Login</h2>
        <p className="mb-4">Enter your email below to login to your account</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Link href="#" className="text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
          </div>
          {loginError && <p className="text-red-600 text-sm">{loginError}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
