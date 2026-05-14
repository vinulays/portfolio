import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Vinula Senarathne - Portfolio | Developer | Freelancer",
  description:
    "Vinula Senarathne - A professional portfolio showcasing web and mobile development, design, and projects",
  verification: {
    google: "gzxo9DgfXzCvH-ihY6ezucgNXbltGrYxVU7kAsmgoLo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Vinula Senarathne",
              url: "https://vinulasenarathne.vercel.app/",
              image: "",
              sameAs: [
                "https://www.linkedin.com/in/vinula-senarathne",
                "https://github.com/vinulays",
                "https://www.facebook.com/vinulasen",
              ],
              jobTitle: "Full Stack Developer",
            }),
          }}
        />
      </head>

      <body
        suppressHydrationWarning
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
