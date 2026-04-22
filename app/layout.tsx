import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Bitware AI | Agencia de Automatización e Inteligencia Artificial',
  description: 'Agencia experta en Automatización e IA. Implementamos Chatbots, Agentes RAG y optimización de procesos para empresas. Aumenta tu ROI y eficiencia operativa.',
  keywords: 'Agencia IA Chile, Automatización de Procesos, Chatbots Inteligentes, Consultoría IA, Agentes RAG, Transformación Digital',
  authors: [{ name: 'Bitware AI' }],
  openGraph: {
    type: 'website',
    url: 'https://bitware-ai.cl/',
    title: 'Bitware AI | Automatización Inteligente para Empresas',
    description: 'Convierte procesos manuales en resultados automáticos. Recupera horas de trabajo con Agentes IA y Automatización.',
    images: ['https://res.cloudinary.com/dvofqghc7/image/upload/v1763672460/1_tfgz3c.png'],
    siteName: 'Bitware AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitware AI | Automatización Inteligente',
    description: 'Automatiza tu empresa con IA. Menos errores, más eficiencia.',
    images: ['https://res.cloudinary.com/dvofqghc7/image/upload/v1763672460/1_tfgz3c.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
