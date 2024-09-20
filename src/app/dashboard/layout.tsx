"use client"; // Ensure this is a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Dashboard/Nabvar";
import Sidebar from "@/components/Dashboard/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "loading") return; // Wait for session to load
  //   if (!session) {
  //     router.push("/auth"); // Redirect to login page if not logged in
  //   }
  // }, [session, status, router]);

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to /auth with the callbackUrl set to /dashboard
      router.push(`/auth?callbackUrl=/dashboard`);
    }
  }, [status, router]);

  // Render your dashboard content only if the user is logged in
  if (status === "loading" || !session) return null;

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
