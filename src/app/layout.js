import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Museo de la Tortura",
  description:
    "El Museo de la Tortura en Jalisco es un destino histórico y cultural fascinante que ofrece a los visitantes una oportunidad única de adentrarse en el oscuro pasado de la humanidad. Con una colección impresionante de artefactos, exhibiciones y relatos, este museo proporciona una visión detallada y estremecedora de los métodos de tortura utilizados a lo largo de la historia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
