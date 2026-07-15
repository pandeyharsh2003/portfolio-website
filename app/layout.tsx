import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harsh Pandey | Data Analyst & Business Intelligence',
  description: 'Premium analytics portfolio showcasing data storytelling, business intelligence, and SQL expertise.',
  keywords: 'Data Analyst, Business Intelligence, SQL, Python, Power BI, Tableau',
  authors: [{ name: 'Harsh Pandey' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white-bg text-text-primary">
        {children}
      </body>
    </html>
  );
}
