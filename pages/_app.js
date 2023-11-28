import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div >
          <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
