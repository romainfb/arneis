import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../components/(provider)/cartProvider";
import Footer from "../components/(structure)/Footer";
import Header from "../components/(structure)/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arneis - Vente de mobilier artisanal",
  description: "Vente de mobilier artisanal en bois massif et sur mesure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lightMode">
      <SessionProvider>
        <CartProvider>
          <body className={inter.className}>
            <Toaster
              position="bottom-right"
              toastOptions={{
                className: "",
                style: {
                  padding: "25px",
                  color: "black",
                  fontWeight: "500",
                },
                success: {
                  iconTheme: {
                    primary: "black",
                    secondary: "white",
                  },
                },
              }}
            />
            <Header />
            {children}
            <Footer />
          </body>
        </CartProvider>
      </SessionProvider>
    </html>
  );
}
