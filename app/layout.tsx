import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "U-dassurrt",
    template: "%s · U-dassurrt",
  },
  description: "baked goods, sweet cravings, and questionable life choices 🍰",
  applicationName: "U-dassurrt",

  // Light-only
  themeColor: "#fffdf7", // vanilla icing background
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "bg-background",
          "text-foreground",
          "min-h-screen",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}