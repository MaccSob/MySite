import { NavLinks } from "./navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
              <NavLinks />
      <body>{children}</body>
    </html>
  )
}
