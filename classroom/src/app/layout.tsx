import "./globals.css";

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
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
