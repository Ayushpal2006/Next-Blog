import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Blog",
  description: "GWelcome to X Blog, your go-to destination for insightful coding tutorials, tech trends, and programming tips. Whether you're a beginner looking to learn the basics or an experienced developer seeking to enhance your skills, our blog offers a wealth of resources tailored for every level. Dive into topics like TypeScript, JavaScript, and web development, and discover practical guides, best practices, and the latest in technology. Join our community of passionate coders and elevate your programming journey with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-p-20 scroll-smooth">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
