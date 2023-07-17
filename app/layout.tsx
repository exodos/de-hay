import { getServerSession } from "next-auth";
import AppProviders from "./AppProviders";
import "./globals.css";
import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeHay Technologies",
  description:
    "Delivering the technology you deserve| zkteco.com | zkteco ethiopia",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <AppProviders session={session}>{children}</AppProviders>
      </body>
    </html>
  );
}
