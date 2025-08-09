import React from "react";
import "./contact.css";
const about = () => {
  return (
    <div className="body-contact">
      <h1>About Us</h1> <h1> Who We Are</h1>
      <p className="header-contact-form">
        At e-Watch, we are passionate about time. Founded with a love for both
        modern and classic timepieces, our goal is simple: to offer a watch that
        fits every style, personality, and moment.
      </p>
      <br />
      <h1>Our Vision</h1>
      <p className="header-contact-form">
        To become the leading online destination in the Middle East for
        high-quality smart and classic watches — making shopping fast,
        trustworthy, and enjoyable for everyone.
      </p>
      <h1> What Makes Us Different?</h1>{" "}
      <div className="list-contact">
        <ul>
          <li> ✅ 100% genuine products</li>
          <li> 🚚 Fast shipping nationwide</li>
          <li>💳 Secure and diverse payment options</li>
          <li> 🤝 Friendly support — before and after your purchase</li>
        </ul>
      </div>
      <h1>What We Offer</h1>
      <p className="header-contact-form">
        A carefully curated collection of the best watches in the world: from
        advanced smartwatches built for active lifestyles to luxury classic
        watches designed to elevate your look.
      </p>{" "}
      <h1>Our Promise</h1>
      <p className="header-contact-form">
        {" "}
        We believe a watch is more than a device — it’s a statement, a memory,
        and a companion on your journey.
      </p>
      <span className="header-contact-form">
        {" "}
        Thank you for choosing e-Watch. We’re proud to be a part of your story.
      </span>
    </div>
  );
};

export default about;
