import "./globals.css";
import { Inter, Kanit, Anton, Montserrat } from "next/font/google";

export const metadata = {
  title: "Rcord",
  description: "Record, Import and Share large audio or video files using url's",
};

export const inter = Inter({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const kanit = Kanit({
  weight: ["400", "700"],
  subsets: ["thai"],
  display: "swap",
  variable: "--font-kanit",
});

export const anton = Anton({
  weight: ["400"],
  subsets: ["vietnamese"],
  display: "swap",
  variable: "--font-anton",
});

export const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const variables = [
    montserrat.variable,
    inter.variable,
    kanit.variable,
    anton.variable,
  ];
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kanit.variable} ${anton.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
