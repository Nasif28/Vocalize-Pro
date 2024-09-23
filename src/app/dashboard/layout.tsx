"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Dashboard/Nabvar";
import Sidebar from "@/components/Dashboard/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/auth?callbackUrl=/dashboard`);
    }
  }, [status, router]);

  if (status === "loading" || !session) return null;

  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <Navbar />
      <div className="myContainer flex">
        <div className=" h-auto max-w-[300px] py-5">
          <Sidebar />
        </div>
        <div className="p-5 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
