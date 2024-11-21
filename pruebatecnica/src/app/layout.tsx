import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/providers";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
          </ThemeProvider>
          
        </Providers>
      </body>
    </html>
  );
}
