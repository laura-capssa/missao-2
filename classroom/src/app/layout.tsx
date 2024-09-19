import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../app/components/NavBar';

// Comente as fontes locais temporariamente
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: 'Classroom',
  description: 'Missão 2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
