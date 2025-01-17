import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Context } from "@/contexts/Context";

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
        <Context>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col lg:flex-row flex-1">
              <Sidebar />
              <main className="flex flex-1 w-full lg:w-3/4 flex-wrap ">
                {children}
              </main>
            </div>
          </div>
        </Context>
      </body>
    </html>
  );
}
