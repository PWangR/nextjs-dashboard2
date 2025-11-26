import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
        <p
          className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        > <strong>Welcome to Acme.</strong> This is the example for the{' '}
          <a href="https://nextjs.org/learn/" className="text-blue-500">
            Next.js Learn Course
          </a>
          , brought to you by Vercel.
        </p>
      </body>
    </html>
  );
}
