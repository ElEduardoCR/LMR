import "./globals.css";

export const metadata = {
  title: "LMR Mensajería y Logística | Tu envío, nuestra prioridad",
  description:
    "LMR Mensajería y Logística en Chihuahua. Flota moderna y rastreo en tiempo real. Envíos seguros para tu empresa.",
  keywords: [
    "mensajería",
    "logística",
    "envíos",
    "paquetería",
    "Chihuahua",
    "LMR",
  ],
  openGraph: {
    title: "LMR Mensajería y Logística",
    description: "Mensajería y logística en Chihuahua con flota moderna y rastreo en tiempo real.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#facc15",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-ink-900 text-stone-900 font-sans">{children}</body>
    </html>
  );
}
