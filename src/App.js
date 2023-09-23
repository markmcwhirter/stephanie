import * as React from "react";
import BioPage from "./BioPage";
import BookPage from "./BookPage";
import BlogPage from "./BlogPage";
import PropheticPage from "./PropheticPage";
import MediaPage from "./MediaPage";
import ShoppingPage from "./ShoppingPage";
import ContactPage from "./ContactPage";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; 

const initialOptions = {
  "client-id": "K6VGSQREMG988",
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};

export default function App() {

  return (
<div className="content" id="content">
    <div id="titlepage">TITLE</div>

    <div id="navbar1">
        <a href="#titlepage">Home</a>
        <a href="#biopage">About</a>
        <a href="#bookpage">Books</a>
        <a href="#blogpage">Blog</a>
        <a href="#propheticpage">Prophetic Ministry</a>
        <a href="#mediapage">Media</a>
        <a href="#shoppage">Shop</a>
        <a href="#contactpage">Contact</a>
    </div>
    <BookPage></BookPage>
    <BioPage></BioPage>
    <BlogPage></BlogPage>
    <PropheticPage></PropheticPage>
    <MediaPage></MediaPage>
    <ShoppingPage></ShoppingPage>
    <ContactPage></ContactPage>
    <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons />
        </PayPalScriptProvider>
</div>
  )
}
