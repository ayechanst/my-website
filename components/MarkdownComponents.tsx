import React, { ReactNode } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CustomLinkProps {
  children: ReactNode;
  href: string;
}

const CustomHeading1 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h1
    style={{
      fontSize: "34px",
      lineHeight: "1.5",
      color: "white",
      margin: "0 0 5px 0",
    }}
  >
    {children}
  </h1>
);

const CustomHeading2 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h2
    style={{
      fontSize: "28px",
      lineHeight: "1.5",
      color: "#B2F5EA",
      margin: "0 0 5px 0",
    }}
  >
    {children}
  </h2>
);

const CustomHeading3 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h3
    style={{
      fontSize: "24px",
      lineHeight: "1.5",
      color: "#B2F5EA",
      margin: "0 0 5px 0",
    }}
  >
    {children}
  </h3>
);

const CustomParagraph = ({
  children,
}: {
  children: ReactNode;
}) => (
  <p style={{ lineHeight: "1.3", fontSize: "17px" }}>
    {children}
  </p>
);

const CustomList = ({
  children,
}: {
  children: ReactNode;
}) => (
  <ul style={{ fontSize: "17px", lineHeight: "2" }}>
    {children}
  </ul>
);

// Custom image component with adjustable spacing
const CustomImage = ({ src }: { src: string }) => (
  <img
    src={src}
    style={{
      display: "inline-block",
      margin: "5px 5px 5px 5px",
    }}
  />
);

const CustomBold = ({
  children,
}: {
  children: ReactNode;
}) => (
  <b
    style={{
      fontSize: "17px",
      color: "white",
    }}
  >
    {children}
  </b>
);

const CustomLink = ({
  children,
  href,
}: CustomLinkProps) => (
  <a
    href={href}
    style={{
      color: "#B2F5EA",
    }}
  >
    {children}
  </a>
);

const CustomQuote = ({
  children,
}: {
  children: ReactNode;
}) => (
  <blockquote
    style={{
      fontSize: "11px",
      color: "#B2F5EA",
    }}
  >
    {children}
  </blockquote>
);

// const CustomCodeBlock = ({
//   children,
// }: {
//   children: ReactNode;
// }) => (
//   <React.Suspense fallback={<div>Loading...</div>}>
//     <SyntaxHighlighter
//       language="solidity"
//       style={vscDarkPlus}
//       showLineNumbers
//       key={String(children).trim()}
//     >
//       {String(children).trim()}
//     </SyntaxHighlighter>
//   </React.Suspense>
// );

// const CustomInlineCode = ({
//   children,
// }: {
//   children: ReactNode;
// }) => (
//   <code
//     style={{
//       backgroundColor: "#f4f4f4",
//       borderRadius: "0.3em",
//       padding: "0.2em 0.4em",
//     }}
//   >
//     {children}
//   </code>
// );

export const options = {
  overrides: {
    h1: {
      component: CustomHeading1,
    },
    h2: {
      component: CustomHeading2,
    },
    h3: {
      component: CustomHeading3,
    },
    p: {
      component: CustomParagraph,
    },
    strong: {
      component: CustomBold,
    },
    ul: {
      component: CustomList,
    },
    img: {
      component: CustomImage,
    },
    a: {
      component: CustomLink,
    },
    blockquote: {
      component: CustomQuote,
    },
    // code: {
    //   component: CustomCodeBlock,
    // },
  },
};
