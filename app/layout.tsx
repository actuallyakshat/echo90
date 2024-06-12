import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthProvider } from "@/providers/auth-provider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo90",
  description:
    "Echo90 is a journaling app offering diverse prompts to inspire reflection, introspection, and personal growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ClerkProvider>
          <AuthProvider>
            <Navbar />
            <div>{children}</div>
          </AuthProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
