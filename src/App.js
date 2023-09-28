import * as React from "react";
import BioPage from "./bio/BioPage";
import BookPage from "./book/BookPage";
import BlogPage from "./blog/BlogPage";
import PropheticPage from "./prophetic/PropheticPage";
import MediaPage from "./media/MediaPage";
import ShoppingPage from "./shopping/ShoppingPage";
import ErrorBoundary from "./util/ErrorBoundary";

import Modal from './ui/Modal/Modal';
import { MGMProvider } from './util/MGMContextProvider';
import MailchimpForm from "./util/MailchimpForm";
import ContactContainer from "./contact/ContactContainer/ContactContainer";



export default function App() {

  return (
    <>
    <MGMProvider>
    <div className="content" id="content">
        <div id="titlepage"></div>

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
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <ContactContainer></ContactContainer>
        </ErrorBoundary>
        <Modal><MailchimpForm /></Modal>
    </div>
    </MGMProvider>
    </>
  )
}
