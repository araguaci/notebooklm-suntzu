import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "⚔️ Sun Tzu: A Arte da Guerra na Modernidade e Teoria",
  description: "Explore o legado de Sun Tzu e sua obra A Arte da Guerra, analisando sua aplicação em contextos contemporâneos. Compara filosofias estratégicas e demonstra aplicações modernas.",
  keywords: ["Sun Tzu", "Arte da Guerra", "Estratégia", "Clausewitz", "Teoria dos Jogos", "Liderança", "NotebookLM"],
  authors: [{ name: "araguaci" }],
  creator: "araguaci",
  publisher: "artesdosul",
  metadataBase: new URL("https://suntzu-chi.vercel.app"),
  openGraph: {
    title: "⚔️ Sun Tzu: A Arte da Guerra na Modernidade e Teoria",
    description: "Explore o legado de Sun Tzu e sua obra A Arte da Guerra, analisando sua aplicação em contextos contemporâneos.",
    url: "https://suntzu-chi.vercel.app",
    siteName: "Sun Tzu: A Arte da Guerra",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "⚔️ Sun Tzu: A Arte da Guerra na Modernidade e Teoria",
    description: "Explore o legado de Sun Tzu e sua obra A Arte da Guerra, analisando sua aplicação em contextos contemporâneos.",
  },
  manifest: "/manifest.json",
  themeColor: "#FF8000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sun Tzu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

