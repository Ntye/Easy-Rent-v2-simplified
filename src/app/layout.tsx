// src/app/layout.tsx
import './globals.css';
// import { Providers } from '@/providers/providers';


export const metadata = {
  title: 'Easy Rental',
  description: 'Location de véhicules simplifié',
};

export default function RootLayout(
  {children,}: { children: React.ReactNode; }
) {
  return (
    <html lang="en">
    <body>
    {/*<Providers>*/}
      {children}
    {/*</Providers>*/}
    </body>
    </html>
  );
}
