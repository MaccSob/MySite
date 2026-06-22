import Navbar from "./navigation/navbar";
import "./global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-[#fffff]">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}