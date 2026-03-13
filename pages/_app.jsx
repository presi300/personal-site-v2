import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { EventEmitter } from "events";
import localFont from 'next/font/local'

EventEmitter.defaultMaxListeners = 20;

const poppins = localFont({
  src: [
    {
      path: './fonts/poppins-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/poppins-700.woff2',
      weight: '700',
      style: 'normal',
    },
    
  ],
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
