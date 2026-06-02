import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import ChatwootWidget from "../components/ChatwootWidget";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <ChatwootWidget />
    </ThemeProvider>
  );
}

export default MyApp;
