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
        <main className="container mx-auto px-4 pb-96">{children}</main>
        <footer className=" bg-black absolute w-full bottom-0 h-96">
          <div className="container"></div>
        </footer>
      </body>
    </html>
  );
}
