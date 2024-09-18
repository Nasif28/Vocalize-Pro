import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
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
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
