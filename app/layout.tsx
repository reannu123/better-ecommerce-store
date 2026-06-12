import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { PublicEnvScript } from "next-runtime-env";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Better Ecommerce Store",
  description: "Customer storefront for Better Ecommerce Admin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
      </head>
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer>
          Developed by{" "}
          <a
            href="https://reannuinstrella.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold">Reannu.dev</span>
          </a>
        </Footer>
      </body>
    </html>
  );
}
