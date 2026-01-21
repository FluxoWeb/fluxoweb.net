import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col py-12 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <span className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4">
          {props.pretitle}
        </span>
      )}

      {props.title && (
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {props.children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;