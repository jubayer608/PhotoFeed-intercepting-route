import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "PhotoFeed",
  description: "A photo feed apps built with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <div className="container my-4 lg:my-8">{children}</div>
      </body>
    </html>
  );
}
