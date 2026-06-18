// app/layout.tsx
import Navbar from "./navigation/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#F7F4EF]">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}