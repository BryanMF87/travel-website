import * as React from "react";
import GlobalStyle from "../globalStyles";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
