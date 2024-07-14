import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { EventEmitter } from "events";
import { Poppins } from "next/font/google";
import { selectedAccent } from "@/components/Atoms";
import { useAtom } from "jotai";

EventEmitter.defaultMaxListeners = 20;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className={`overflow-hidden ${poppins.className}`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
