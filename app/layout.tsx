import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";

export const metadata = { title: "Mr Spark — Elektriker & Elektro-Notdienst", description: "Elektriker, Elektroinstallation, Störung beheben und 24h Elektro-Notdienst.", keywords:["Elektriker","Elektroinstallation","Elektro-Notdienst","Sicherungskasten","Steckdosen","Lichtinstallation"] };

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="de"><body><Header />{children}<Footer /></body></html>; }
