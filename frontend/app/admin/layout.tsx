import Navbar from "@/components/admin components/Navbar";
import Sidebar from "@/components/admin components/Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </>
  );
}
