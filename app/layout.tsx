import { montserrat } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>

        {children}
        <footer>
            Hecho por Elias Montilla BTM Studio
        </footer>
        </body>
    </html>
  );
}
