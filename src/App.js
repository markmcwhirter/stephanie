import * as React from "react";
import BioPage from "./bio/BioPage";
import BookPage from "./book/BookPage";
import BlogPage from "./blog/BlogPage";
import PropheticPage from "./prophetic/PropheticPage";
import MediaPage from "./media/MediaPage";
import ShoppingPage from "./shopping/ShoppingPage";

import Modal from './ui/Modal/Modal';
import { MGMProvider } from './util/MGMContextProvider';
import MailchimpForm from "./util/MailchimpForm";
import ContactContainer from "./contact/ContactContainer/ContactContainer";



export default function App() {

  return (
    <>
      <MGMProvider>
        <div className="content" id="content">
          <div id="titlepage">
            <div className="flex-container">
              

              <div className="flex-child">
                <img src="\images\SplashSteph.jpg" className="image_sizer" />
              </div>

            </div>
          </div>

          <div id="navbar1">
            <a href="#titlepage">Home</a>
            <a href="#biopage">About</a>
            <a href="#bookpage">Books</a>
            <a href="#blogpage">Blog</a>
            <a href="#propheticpage">Prophetic Ministry</a>
            <a href="#mediapage">Media</a>
            <a href="#shoppage">Shop</a>
            <a href="#connect">Contact</a>
          </div>

          <BookPage></BookPage>
          <BioPage></BioPage>
          <BlogPage></BlogPage>
          <PropheticPage></PropheticPage>
          <MediaPage></MediaPage>
          <ShoppingPage></ShoppingPage>
          <ContactContainer></ContactContainer>
          <Modal><MailchimpForm /></Modal>
        </div>
      </MGMProvider>
    </>
  )
}
