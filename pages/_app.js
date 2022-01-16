import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Apply same layout to all pages */}
      <Component {...pageProps} /> {/* Renders the page */}
    </Layout>
  );
}

export default MyApp;
