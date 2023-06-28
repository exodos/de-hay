import ProductNav from "@/components/layout/product-nav";
import FooterPage from "../../footer";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto max-w-[90%] pt-10">
        <ProductNav />
        <div className="lg:pl-80 xl:pl-96">
          <main className="lg:pr-52">{children}</main>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
