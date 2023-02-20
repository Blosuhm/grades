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
        <main className="min-h-screen container mx-auto px-4 py-16 mb-96">
          {children}
        </main>
        <footer className=" bg-black absolute w-full bottom-0 h-96">
          <div className="container"></div>
        </footer>
      </body>
    </html>
  );
}
