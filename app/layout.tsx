export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Project Horizon</title>
      <body>{children}</body>
    </html>
  )
}