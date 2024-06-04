"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

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
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-4 flex">
            <h1 className="text-primary font-black text-5xl w-full">
              Créer un compte
            </h1>
            <p className="text-secondary text-base font-light leading-relaxed">
              Entrez vos informations pour créer un compte.
            </p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="w-full flex-col justify-start items-start gap-8 flex mt-10">
            <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
                  E-mail
                </label>
                <input
                  type="text"
                  required
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                />
              </div>
            </div>
            <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                />
              </div>
            </div>
            <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                />
              </div>
            </div>
            <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
                  Confirmation du mot de passe
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  required
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                />
              </div>
            </div>
            {registerError && (
              <p className="text-red-600 text-sm">
                {toast.success(registerError)}
              </p>
            )}
            <Link href={"/login"}>
              <span className="text-primary text-sm underline">
                Vous avez déjà un compte ? Me connecter
              </span>
            </Link>
            <button
              type="submit"
              className="btn btn-primary w-full py-2 px-4 rounded-md"
            >
              Créer un compte
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
