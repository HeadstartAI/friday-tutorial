import React from "react";
import { AppProps } from "next/app";
import "./index.css";

// Only import setupMockApi on the client side
if (typeof window !== "undefined") {
  require("../src/setupMockApi");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
