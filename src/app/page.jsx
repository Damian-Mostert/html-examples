"use client";

import { useEffect, useRef } from "react";

import Highlight from "react-highlight";

import "highlight.js/styles/a11y-dark.css";

import examples from "./examples";

function Example({ code, key }) {
  const exampleRef = useRef();
  useEffect(() => {
    exampleRef.current.innerHTML = code;
  }, []);
  return (
    <section className="flex flex-wrap py-2">
      <div className="w-full max-w-[50%] overflow-auto">
        <Highlight className="html" contentEditable={true}>
          {code}
        </Highlight>
      </div>
      <div
        ref={exampleRef}
        className="w-full max-w-[50%] bg-white text-black"
      ></div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <h1 className="text-center w-full text-white text-2xl">
        HTML examples
      </h1>
      {examples.map((example, key) => {
        return (
          <div className="w-full py-4">
            <div className="w-full text-center text-xl">{example.title}</div>

            <div>
              {example.examples.map((e, i) => {
                return <Example code={e} key={key + "-" + i} />;
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}
