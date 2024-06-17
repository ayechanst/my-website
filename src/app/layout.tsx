import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="w-full bg-primary text-white p-4">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-2xl">Aye Chan's Website</h1>
        </Link>

        <p>Welcome!</p>
      </div>
    </header>
  );

  const footer = (
    <footer className="w-full bg-secondary text-white p-4 mt-auto">
      <div className="container mx-auto">
        <h3 className="text-xl">Developed by Aye Chan</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en" data-theme="cupcake" className="h-full">
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
      >
        {header}
        <div className="mx-auto max-w-3xl px-7">
          {children}
        </div>
        {/* <main className="flex-grow container mx-auto flex items-center justify-center bg-accent">
        </main> */}
        {footer}
      </body>
    </html>
  );
}
