import React from 'react';
import { Icon } from '../Icons/Icons';

import Footer from './index';
export function FooterContainer(){
   return (
       <Footer>
           <Footer.Row>
          <Footer.Wrapper>
              <Footer.Column> 
                    <Footer.Title>About us</Footer.Title>
                    <Footer.Link href="http://crssietjhajjar.ac.in/about/">Story</Footer.Link>
                    <Footer.Link href="http://crssietjhajjar.ac.in/photo-gallery/">Photo Gallery</Footer.Link>
              </Footer.Column>
          </Footer.Wrapper>
          <Footer.Wrapper>
              <Footer.Column> 
                    <Footer.Title>Institute info</Footer.Title>
                    <Footer.Link href="http://crssietjhajjar.ac.in/"><Icon className="fas fa-university"/>Website</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/crssietjhajjar2017/"><Icon className="fab fa-instagram"/>Instagram Page</Footer.Link>
                    <Footer.Link href="https://www.facebook.com/crssietjhajjar/"><Icon className="fab fa-facebook-f"/>Facebook Page</Footer.Link>
                    {/* <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter Handle</Footer.Link>  */}
              </Footer.Column>
          </Footer.Wrapper>
          <Footer.Wrapper>
              <Footer.Column> 
                    <Footer.Title>Contact us</Footer.Title>
                    <Footer.Link href="https://www.instagram.com/himanshupal87088/"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                    <Footer.Link href="https://www.facebook.com/himanshupal7826/"><Icon className="fab fa-facebook-f"/>Facebook</Footer.Link>
                    <Footer.Link href="https://mobile.twitter.com/Himansh57442260"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
              </Footer.Column>
          </Footer.Wrapper>
          </Footer.Row>
       </Footer>
   )

}