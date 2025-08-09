import React from "react";
import "./contact.css";
import "./Jison.css";
const contact = () => {
  return (
    <div className="body-contact">
      <div className="header-contact-form-all ">
        <h1>Contact Us</h1>
        <p className="header-contact-form">
          “We’d love to hear from you! Feel free to reach out using any of the
          methods below.”
        </p>
      </div>
      <div className="contact-details">
        <h1> Contact details section :</h1>
        <div className="list-contact">
          <ul>
            <li>Phone: + 20 0155 300 7698 </li>
            <li>Email: ahmedalfouad230@gmail.com </li>
            <li>Address : 6th october, Giza, Egypt</li>
            <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
          </ul>
        </div>
        <h1> Contact form labels : </h1>
        <div className="form-contact">
          <form className="form">
            <label>Name : </label>

            <input type="text" placeholder="Name " className="inpot-form" />
            <br />
            <label>
              Email : <input type="email" placeholder="@gmail.com " />
            </label>
            <br />
            <label>Phone Number:</label>
            <input type="number" placeholder="Enter your number" />
            <br />
            <label>Send Message:</label>
            <br />
            <textarea name="ahmedalfouad@gmail.com" id="">
              Place Enter your Message
            </textarea>
            <br />
            <button type="submit" className="send-mase">
              send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
