import "./globals.css";
import { Be_Vietnam_Pro, Platypi, Inter } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-main",
});

const platypi = Platypi({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-playful",
});

export const metadata = {
  title: "The Fresh Friends",
  description: "Meet the Fresh Friends — a world of fun, health and adventure for children.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${platypi.variable} ${inter.variable}`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
