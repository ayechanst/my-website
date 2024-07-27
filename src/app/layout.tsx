import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="w-full text-accent p-10">
      <div className="text-center">
        <Link href="/" className="text-4xl">
          [Aye Chan's Webpage]
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-600 mt-2 py-2 text-center text-cyan-200">
        <h3>connect with me: </h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/ayechanst"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://t.me/ayechan1000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Telegram
          </a>
          <a
            href="https://medium.com/@ayechansant"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );

  return (
    <html className="h-full">
      <head />
      <body className="flex flex-col min-h-screen bg-primary-content">
        {header}
        <div className="flex-grow max-h-full mx-auto max-w-3xl px-7">
          {children}
        </div>
        <div className="">{footer}</div>
      </body>
    </html>
  );
}
