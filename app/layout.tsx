import type { Metadata } from "next";
import { Poppins } from "next/font/google"

import "./globals.css";
import PropertyListProvider from "@/providers/PropertyListProvider";
import Footer from "@/components/Footer";
import CreateNewListProvider from "@/providers/TCreateNewListProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "800"]})

export const metadata: Metadata = {
  title: "Hommez",
  description: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <CreateNewListProvider>
          <PropertyListProvider>
                {children}
                <Footer />
          </PropertyListProvider>
        </CreateNewListProvider>
      </body>
    </html>
  );
}
