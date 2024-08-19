import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InterBusineX",
  description: "Tu conexión al mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        defer
        src="https://digincreasemetrics.up.railway.app/script.js"
        data-website-id="935aef36-adca-4edf-bcb6-bcbabf53fb33"
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
