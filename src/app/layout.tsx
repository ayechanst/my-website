import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="w-full text-accent p-6 pl-12">
      <div className="flex justify-start gap-6 text-xl font-bold">
        <Link
          href="/"
          className="hover:text-secondary transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="/library"
          className="hover:text-secondary transition-colors duration-300"
        >
          Library
        </Link>
        <Link
          href="/hireMe"
          className="hover:text-secondary transition-colors duration-300"
        >
          Work & Experience
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t mt-2 py-2 text-center">
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
    <html className="h-full" data-theme="dark">
      <head />
      <body className="flex flex-col min-h-screen bg-primary-content text-base-content">
        {header}
        {/* <div className="flex-grow max-h-full mx-auto max-w-3xl px-7"> */}
        <div className="flex-grow mx-auto items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
