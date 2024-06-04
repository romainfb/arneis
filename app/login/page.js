"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

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
      setLoginError(true);
    }
  };

  return (
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-4 flex">
            <h1 className="text-primary font-black text-5xl w-full">
              Se connecter
            </h1>
            <p className="text-secondary text-base font-light leading-relaxed">
              Afin d'accéder à votre compte, veuillez vous connecter en
              utilisant votre adresse email et votre mot de passe.
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
                  type="email"
                  name="email"
                  className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  name="password"
                  className="w-full focus:outline-none bg-accent text-primary placeholder-secondary text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Link href={"/register"}>
              <span className="text-primary text-sm underline">
                Vous n'avez pas encore de compte ? Créez-en un !
              </span>
            </Link>
            {loginError &&
              toast.success(
                "Une erreur s'est produite. Veuillez vérifier les champs du formulaire."
              )}
            <button
              type="submit"
              className="btn btn-primary w-full py-2 px-4 rounded-md"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
