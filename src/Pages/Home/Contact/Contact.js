import React from "react";
import Bg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="mt-16 py-32 mb-10 rounded-xl"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-4/12 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xl font-bold text-primary">Contact Us</h2>
          <p className="text-3xl text-white">Stay connected with us</p>
        </div>
        <div>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full mt-5"
            />
            <textarea
              className="textarea textarea-bordered h-32 w-full mt-5"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="btn btn-block btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-5"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;