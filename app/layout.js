import { Montserrat } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ToastProvider from "@/providers/toast-provider";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Kinepolis | Kinesiología Integral, Estética y Pilates Reformer en Rosario",
  description:
    "Descubre Kinepolis, tu clínica de kinesiología integral en Rosario, Santa Fe. Ofrecemos tratamientos personalizados de kinesiología, estética y pilates reformer para mejorar tu bienestar físico, aliviar el dolor y aumentar tu movilidad. Visítanos hoy y mejora tu salud con nuestros expertos.",
  keywords: [
    "kinesiología Rosario",
    "fisioterapia Rosario",
    "tratamientos de kinesiología",
    "pilates reformer Rosario",
    "alivio del dolor",
    "mejora de la movilidad",
    "bienestar físico",
    "centro de kinesiología",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kinepoliskinesiologia.com/" />
        <meta
          name="google-site-verification"
          content="jb1yXtGnz0NKvOeJ446RZD5U7yX33nD31zSM5QP8_i4"
        />
      </head>
      <body translate="no" className={inter.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
