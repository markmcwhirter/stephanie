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
                <div className="flex-child">
                  <div className="great-vibes-regular">
                    <div>Stephanie McKittrick</div>
                  </div>
                  <img src="images/steph1_beige.jpg" alt="" className="image_sizer_large" />
                </div>
              </div>

              <div className="flex-child">
                <div className="flex-child vertical-space1">

                </div>
                <div className="great-vibes-regular">
                  <div>Speaker</div>
                  <div className="vertical-space2"></div>
                  <div>Coach</div>
                  <div className="vertical-space2"></div>
                  <div>Minister</div>
                </div>
              </div>
              <div className="flex-child">

              </div>

            </div>
          </div>

          <div id="navbar1">
            <a href="#titlepage">Home</a>
            <a href="#biopage">About</a>
            <a href="#bookpage">Books</a>
            <a href="http://146.190.48.100/" target="_blank">Blog</a>
            <a href="https://www.youtube.com/@StephanieMckittrick" target="_blank">Prophetic Ministry</a>
            <a href="#mediapage">Media</a>
            <a href="#shoppage">Shop</a>
          </div>

          <BioPage></BioPage>
          <BookPage></BookPage>
          <MediaPage></MediaPage>
          <ShoppingPage></ShoppingPage>
          <ContactContainer></ContactContainer>
          <Modal><MailchimpForm /></Modal>
        </div>
      </MGMProvider>
    </>
  )
}
