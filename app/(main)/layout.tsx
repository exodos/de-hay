import NavBar from "@/components/layout/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
