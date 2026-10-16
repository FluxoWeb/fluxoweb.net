import React from "react";

// Ancho y márgenes alineados con el contenido del hero enmarcado.
const Container = ({ className = "", children, as: Tag = "div" }) => {
  return <Tag className={`mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</Tag>;
};

export default Container;
