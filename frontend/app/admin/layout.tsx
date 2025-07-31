import Navbar from "@/components/admin components/Navbar";
import Sidebar from "@/components/admin components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
