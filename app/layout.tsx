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
    <html lang="en">
      <body>
        {/* @ts-expect-error Async Server Component */}
        <Nav />
        <main>{children}</main>
        {/* <main className="min-h-full">{children}</main> */}
      </body>
    </html>
  );
}
