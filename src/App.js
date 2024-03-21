import * as React from "react";
import BioPage from "./bio/BioPage";
import BookPage from "./book/BookPage";
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
              <div id="navbar1">
                <a href="#titlepage">Home</a>
                <a href="#biopage">About</a>
                <a href="#bookpage">Books</a>
                <a href="http://146.190.48.100/" target="_blank"  rel="noreferrer">Blog</a>
                <a href="https://www.youtube.com/@StephanieMckittrick" target="_blank"  rel="noreferrer">Prophetic Ministry</a>
                <a href="#mediapage">Media</a>
                <a href="#shoppage">Shop</a>
              </div>
                <img src="images/steph1b.jpg" alt="" className="image_sizer_large" />
              </div>
            </div>
          </div>

          <BioPage></BioPage>
          <BookPage></BookPage>
          <MediaPage></MediaPage>
          <ShoppingPage></ShoppingPage>
        </div>
      </MGMProvider>
    </>
  )
}
