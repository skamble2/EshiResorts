import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
