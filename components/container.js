import React from "react";

// Ancho de contenido del documento de diseño (~1200px útiles) con márgenes laterales de 20–40px.
const Container = ({ className = "", children, as: Tag = "div", ...rest }) => {
  return (
    <Tag className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Container;
