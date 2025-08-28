import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import styles from "@/app/layout.module.css";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./utils/theme/darkTheme";
import { nunitoSans, inter, zillaSlab } from "./utils/constants/fontConstants";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Basic Finance Tracker",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={darkTheme}>
          <div
            className={`${styles.container}${nunitoSans.variable} ${inter.variable} ${zillaSlab.variable}`}
          >
            <Navbar user={user}/>
            {/* All your page content will be rendered inside this main tag */}
            <main className={styles.pageContent}>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
