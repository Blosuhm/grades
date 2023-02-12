import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <nav></nav>
        <main className="container mx-auto px-4">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
