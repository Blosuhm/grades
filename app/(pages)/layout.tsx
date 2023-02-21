import "@/app/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark:bg-gray-600 dark:text-white">
      <head />
      <body>
        <nav></nav>
        <main className="container mx-auto mb-96 min-h-screen px-4 py-16">
          {children}
        </main>
        <footer className="absolute bottom-0 h-96 w-full bg-black">
          <div className="container"></div>
        </footer>
      </body>
    </html>
  );
}
