import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="w-full text-accent p-10">
      <div className="flex justify-start gap-6 text-xl">
        <Link href="/">Home</Link>
        <div>Series</div>
        <div>Projects</div>
        <div>About</div>
        <Link href="/library">Library</Link>
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
        <div className="flex-grow max-h-full mx-auto max-w-3xl px-7">
          {children}
        </div>
        <div className="">{footer}</div>
      </body>
    </html>
  );
}
