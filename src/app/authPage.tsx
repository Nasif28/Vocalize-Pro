import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "./auth/page";

const AuthPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const callbackUrl = router.query.callbackUrl || "/";
      router.push(callbackUrl as string);
    }
  }, [session, router]);

  return !session ? <Login /> : null;
};

export default AuthPage;
