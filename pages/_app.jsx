import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
