import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/shared/lib/theme';
import { Jersey_10, Ubuntu } from 'next/font/google';
import { StyledComponentsRegistry } from "@/shared/lib";
import { Layout } from "@/widgets/Layout";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

const jersey_10 = Jersey_10({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jersey',
})
 
export const metadata: Metadata = {
  title: "hakolr - blog",
  description: "created by hakolr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${jersey_10.variable}`}>
        <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <StyledComponentsRegistry>
                  <Layout>
                    {children}
                  </Layout>
                </StyledComponentsRegistry>
              </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
