import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div >
      <ThemeProvider>
          <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
