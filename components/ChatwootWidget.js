import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {
    // Evitar cargar múltiples veces
    if (window.chatwootSDK) return;

    const BASE_URL = "https://chatwoot.fluxoweb.app";

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "uaggvkUmoEyWruoyJbwibgXy",
        baseUrl: BASE_URL,
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup si es necesario
    };
  }, []);

  return null;
};

export default ChatwootWidget;
