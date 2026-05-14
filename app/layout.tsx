import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";

export const metadata = {
  title: "Mr Spark — Elektriker & Elektro-Notdienst",
  description: "Mr Spark bietet Elektroinstallation, Störungsbehebung und 24h Elektro-Notdienst.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
