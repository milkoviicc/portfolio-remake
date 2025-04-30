import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Marko Milkovic | Frontend developer",
  description: "Frontend developer with a passion for creating beautiful and functional web applications.",
  keywords: "frontend developer, web developer, javascript, react, nextjs, tailwindcss, web applications, websites, portfolio, ecommerce, online store, web design, user experience, UI/UX, responsive design, mobile-first design, accessibility, performance optimization, SEO, search engine optimization, web development trends, web technologies",
  authors: [{ name: "Marko Milkovic"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
