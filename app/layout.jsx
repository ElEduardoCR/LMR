import "./globals.css";

export const metadata = {
  title: "LMR Mensajería y Logística | Tu envío, nuestra prioridad",
  description:
    "LMR Mensajería y Logística. Cobertura nacional, flota moderna y rastreo en tiempo real. Envíos seguros para tu empresa.",
  keywords: [
    "mensajería",
    "logística",
    "envíos",
    "paquetería",
    "México",
    "LMR",
  ],
  openGraph: {
    title: "LMR Mensajería y Logística",
    description: "Cobertura nacional, flota moderna y rastreo en tiempo real.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-ink-900 text-white font-sans">{children}</body>
    </html>
  );
}
