import { Toaster } from "sonner";
import "../pages.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster duration={1000} richColors />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
