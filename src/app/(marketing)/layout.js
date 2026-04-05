import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";

export default function MarketingLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main className="min-h-screen flex flex-col items-center justify-center text-center">{children}</main>
      <MainFooter />
    </>
  );
}
