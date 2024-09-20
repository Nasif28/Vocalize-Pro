import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "./auth/page";

const AuthPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Extract callbackUrl from the query params or fallback to '/'
      const callbackUrl = router.query.callbackUrl || "/";
      router.push(callbackUrl as string); // Redirect to callbackUrl if logged in
    }
  }, [session, router]);

  return !session ? <Login /> : null; // Show login form only if not logged in
};

export default AuthPage;
