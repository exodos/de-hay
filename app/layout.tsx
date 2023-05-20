import Nav from "@/components/layout/nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeHay Technologies",
  description: "Delivering the technology you deserve",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        {/* @ts-expect-error Async Server Component */}
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
