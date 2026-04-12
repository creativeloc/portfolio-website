import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Lorenzo's Portfolio Website",
  description: "Lorenzo's portfolio website"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.className} antialiased bg-slate-950`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
