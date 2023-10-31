import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "app/globals.css";
import { ThemeProvider } from "providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes",
  description:
    "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="notes-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
