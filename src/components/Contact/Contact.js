import "./ContactStyle.css";
import EkorNav from ".././EkorNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationPin
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <>
      <EkorNav />
      <div className="conForm">
        <div className="contact-form-wrapper d-flex justify-content-center">
          <form action="#" class="contact-form">
            <h5 className="title">Contact us</h5>
            <p className="description">
              Feel free to contact us if you need any assistance, any help or
              another question.
            </p>
            <div>
              <input
                type="text"
                className="form-control rounded border-white mb-3 form-input"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control rounded border-white mb-3 form-input"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                className="form-control rounded border-white mb-3 form-text-area"
                rows="5"
                cols="30"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="submit-button-wrapper">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
        <div className="contact-info">
          <div className="crd">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div className="crd-content">
              <h3>Email</h3>
              <span>Shopee@hotmail.com</span>
            </div>
          </div>

          <div className="crd">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div className="crd-content">
              <h3>Phone Number</h3>
              <span>+91 8908256735</span>
            </div>
          </div>

          <div className="crd">
            <i class="icon fas fa-map-marker-alt"></i>
            <FontAwesomeIcon icon={faLocationPin} className="icon" />
            <div className="crd-content">
              <h3>Location</h3>
              <span>
                INDIA
                <img src="https://img.icons8.com/color/20/000000/india.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
