import React from "react";

//Function to render contact information
function ContactInfo() {
  return (
    <>
      <div className="contact">
        <div className="contact-box">
          <p className="reachus">REACH US AT</p>
          <div className="email-box">
            <p className="email">support@kicksup.com</p>
            <small className="emailinfo">for any technical support</small>
          </div>
          <div className="email-box">
            <p className="email">info@kicksup.com</p>
            <small className="emailinfo">for more information</small>
          </div>
          <div className="email-box">
            <p className="email">feedback@kicksup.com</p>
            <small className="emailinfo">to send your feedback</small>
          </div>
          <div className="email-box">
            <p className="email">jobs@kicksup.com</p>
            <small className="emailinfo">to work with us</small>
          </div>
        </div>
      </div>
      <div className="social-contact">
        <h6>stay in touch</h6>
        <div className="sites-div">
          <a href="/">
            <img
              className="social-sites"
              src="/kicksup/images/twitter@3x.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="social-sites"
              src="/kicksup/images/insta@3x.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="social-sites"
              src="/kicksup/images/facebook@3x.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default ContactInfo;
