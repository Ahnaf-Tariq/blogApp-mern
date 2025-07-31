import Sidebar from "@/components/admin components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      {children}
    </>
  );
}
