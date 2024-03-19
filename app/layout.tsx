import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Examon | Create Your Exam",
  description:
    "Create and share unlimited quizzes for others to take, offering a diverse platform for interactive learning and fun challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main className="max-w-screen-xl px-4 md:px-8 m-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
