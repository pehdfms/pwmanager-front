import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import UserService from "../api/user.service";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/login", "/register"];
    const path = url.split("?")[0];

    if (!UserService.getAuthenticatedToken() && !publicPaths.includes(path)) {
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    }
  }

  return <Component {...pageProps} />;
}

export default MyApp;
