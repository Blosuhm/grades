import "./";

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
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
