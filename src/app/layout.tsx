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
  title: "Stryda Design",
  description: "Rent Your Website or Redesign your Landing page",
  icons: {
    icon: "/icono.ico", // Favicon clásico
    shortcut: "/icono.ico", // Para navegadores que usan 'shortcut icon'
    apple: "/apple-touch-icon.png", // Opcional: ícono para iOS (180x180 px recomendado)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
