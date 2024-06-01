"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registerError, setRegisterError] = useState(null);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setRegisterError(null);
    if (password !== passwordConfirm) {
      setRegisterError("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });
      if (response.status !== 201) {
        const errorData = await response.json();
        console.warn(errorData);
        setRegisterError(errorData.message || "Registration failed");
      } else {
        router.push("/login");
      }
    } catch (error) {
      setRegisterError("An unexpected error occurred");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border p-6 shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">Créer un compte</h2>
        <p className="mb-4">Entrez vos informations pour créer un compte</p>
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
            <label htmlFor="username" className="block text-sm font-medium">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-medium"
            >
              Confirmation du mot de passe
            </label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
          </div>
          {registerError && (
            <p className="text-red-600 text-sm">{registerError}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Créer un compte
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className="underline">
            Me connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
