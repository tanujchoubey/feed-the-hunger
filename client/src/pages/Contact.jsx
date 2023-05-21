import React from "react";
import '../css/story.css';

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact us</h1>
            <p>
              <i className="fas fa-paper-plane" /> feedhunger@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt" /> 8544127185
            </p>
            <div className="social-icons">
              <a href="https://facebook.com/">
                <i className="fab fa-facebook" />
              </a>
              <a href="">
                <i className="fab fa-twitter-square" />
              </a>
              <a href="">
                <i className="fab fa-instagram" />
              </a>
              <a href="">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <input
                type="text"
                name="Name"
                placeholder="Your name"
                required=""
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required=""
              />
              <textarea
                name="Message"
                rows={6}
                placeholder="Your Message"
                defaultValue={""}
              />
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            <span id="msg" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          copyright @ feedhunger.Made with <i className="fa-solid fa-heart" />.{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
