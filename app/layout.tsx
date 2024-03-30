import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Examon | Home",
  description:
    "Empower others by crafting and sharing limitless exams, providing a diverse platform for interactive learning and engaging challenges.",
  keywords: [
    "Exams",
    "Quiz",
    "Tasks",
    "Challenges",
    "Levels",
    "Leaderboard",
    "Dashboard",
  ],
  openGraph: {
    images: "/images/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-screen-xl px-4 md:px-8 m-auto w-full mt-5">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
