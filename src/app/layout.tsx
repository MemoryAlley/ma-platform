import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import type { Metadata } from "next";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Colors } from "@/utils/ui/colors";

export const metadata: Metadata = {
  title: "Memory Alley",
  description: "Le meilleur site pour visiter les cimetières en ligne",
};

const { memoryAlley, memorialBtn, memorialLetterBtn } = Colors;

const theme = createTheme({
  colors: {
    memoryAlley,
    memorialBtn,
    memorialLetterBtn
  },
  headings: { fontFamily: 'Lato, sans-serif' },
  primaryColor: "memoryAlley"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
      </body>
    </html>
  );
}
