import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'supagoal',
  description: 'design your goal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.className}`}
    >
      <body className="bg-black text-primary">
        <div className="text-4xl font-bold grid auto-rows-min h-min">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
