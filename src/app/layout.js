import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Component/Navbar";
import { Toaster } from "react-hot-toast";
import AuthSessionProvider from "@/Providers/AuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-11/12 md:w-10/12 lg:max-w-[1300px] mx-auto`}
      >
        <AuthSessionProvider>
          <Navbar />
          <Toaster />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
