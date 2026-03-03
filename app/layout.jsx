import { Inter } from "next/font/google";
import "./globals.css";
import SidebarShell from "@/components/sidebar-shell";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aps - Cybersecurity",
  description: "Expert level Cybersecurity in hours not weeks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <SidebarShell>{children}</SidebarShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
