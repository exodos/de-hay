import ProductNav from "@/components/layout/product-nav";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[85%]">
      {/* @ts-expect-error Async Server Component */}
      <ProductNav />
      <div className="xl:pl-72">
        <main className="mx-auto pt-14">{children}</main>
      </div>
    </div>
  );
};

export default ProductLayout;
