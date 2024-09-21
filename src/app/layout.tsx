import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio - Alexandra Blomberg",
  description: "A blooming portfolio - The display of my projects! By Alexandra Blomberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen h-full m-0">
      <body className="">
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
