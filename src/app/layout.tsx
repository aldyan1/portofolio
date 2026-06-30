import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rizky Agung | Portfolio",
  description: "Personal portfolio website of Rizky Agung - Fullstack Developer & IoT Engineer. Built using Next.js with a luxurious Dark Gold theme.",
  openGraph: {
    title: "Rizky Agung | Portfolio",
    description: "Personal portfolio website of Rizky Agung - Fullstack Developer & IoT Engineer. Built using Next.js with a luxurious Dark Gold theme.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} scroll-smooth h-full`}
    >
      <body className="bg-background text-text-primary antialiased min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
