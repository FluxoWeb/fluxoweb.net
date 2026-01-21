import Image from "next/image";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={`${props.imgPos === "right" ? "lg:order-2" : ""}`}>
            <Image
              src={data.image}
              width={480}
              height={480}
              alt="Benefits"
              className="w-full max-w-md mx-auto"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>

          <div className={`${props.imgPos === "right" ? "lg:order-1" : ""}`}>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              {data.title}
            </h3>

            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {data.desc}
            </p>

            <div className="mt-8 space-y-6">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

function Benefit(props) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900">
        {React.cloneElement(props.icon, {
          className: "h-5 w-5 text-indigo-600 dark:text-indigo-400",
        })}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          {props.title}
        </h4>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default Benefits;
