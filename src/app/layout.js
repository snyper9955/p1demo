import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Luxe Glamour | Professional Makeup Artist Portfolio",
  description: "Bespoke beauty services and professional makeup artistry by Luxe Glamour.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
