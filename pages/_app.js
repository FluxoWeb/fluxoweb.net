import "../css/tailwind.css";
import ChatwootWidget from "../components/ChatwootWidget";

// Una sola composición de franjas negras y claras: sin selector de tema.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ChatwootWidget />
    </>
  );
}

export default MyApp;
