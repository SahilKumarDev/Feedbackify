import Footer from '@/components/Footer/page';
import Navbar from '@/components/Navbar/Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <Navbar /> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
}
