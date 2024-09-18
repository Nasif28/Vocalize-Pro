import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets
  variable: "--font-be-vietnam-pro", // CSS variable to use the font globally
});

export const metadata: Metadata = {
  title: "Vocalize Pro",
  description: "Created by Nasif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable}  antialiased max-w-1980 mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          <main className="h-[calc(100vh-94px)] overflow-y-auto">
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
