import About from "@/pages/about/about"
import Navbar from "./components/navigation/navbar/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <body>{children}</body>
    </html>
  )
}
