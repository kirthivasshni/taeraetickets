import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import { Toaster } from "sonner";
import SessionTimerWrapper from "./SessionTimerWrapper";  
import AuthenticatedThemeWrapper from "./AuthenticatedThemeWrapper";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "taeraetickets",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
      
        {/* ✅ Wrap the entire app in ThemeProvider */}
        <Navbar />

        {/* ✅ Toast component must be rendered once at root */}
        <Toaster richColors position="top-center" />

        {/* ✅ Wrap the entire app in SessionTimerWrapper */}
        <SessionTimerWrapper>
          <AuthenticatedThemeWrapper>
            {children}
          </AuthenticatedThemeWrapper>
        </SessionTimerWrapper>
      </body>
    </html>
  );
}


