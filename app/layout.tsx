import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Éclore Before / After',
  description: 'Swiss-grid before/after presentation for Éclore Aesthetics interior concepts.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
