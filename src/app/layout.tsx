import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { CharactersProvider } from "@/context/Characters";

export const metadata: Metadata = {
  title: "The Harry Potter App",
  description:
    "A Harry Potter app to get information about the characters, students, and staff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CharactersProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex w-3/4">{children}</main>
            </div>
          </div>
        </CharactersProvider>
      </body>
    </html>
  );
}
