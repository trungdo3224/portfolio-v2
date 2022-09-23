import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import "./index.scss";
import emailjs from "@emailjs/browser";

import AnimatedLetters from "../AnimatedLetters/index";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const refForm = useRef();
  const publicKey = "lOBsgnsSWQsd4qpS7";
  const templateId = "template_0w2yhgg";
  const serviceId = "service_yzr00nn";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              index={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Ask something..."
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-btn" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Do Trung
          <br />
          Ha Noi, Viet Nam.
          <span>trungdo3224@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[21.028511, 105.804817]} zoom={13}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[21.028511, 105.804817]}>
                <Popup>Come to have some coffee or just having fun building stuffs.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Contact;
