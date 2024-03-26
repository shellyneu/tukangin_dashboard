import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TukangIn",
  description: "Dashboard TukangIn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
