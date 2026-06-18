import React, { useRef } from "react";
import "../Components/Global.css";

const handlecolorName = () => {
  let naam = document.getElementById("naam");
  let borderColorName = document.getElementById("borderColorName");
  naam.style.color = "#FE7878";
  borderColorName.style.borderBottom = "1px solid #FE7878";
  borderColorName.style.height = "1.5rem";
};

const handlecolorEmail = () => {
  let email = document.getElementById("email");
  let borderColorEmail = document.getElementById("borderColorEmail");
  email.style.color = "#1B74E4";
  borderColorEmail.style.borderBottom = "1px solid #1B74E4";
  borderColorEmail.style.height = "1.5rem";
};

const handlecolorMessage = () => {
  let message = document.getElementById("message");
  let borderColorMessage = document.getElementById("borderColorMessage");
  message.style.color = "#CE65F3";
  borderColorMessage.style.borderBottom = "1px solid #CE65F3";
  borderColorMessage.style.height = "1.5rem";
};

const Contact = ({ bgcolor, darkmode }) => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "7d78993e-8962-489c-a26d-7ecce59ff99a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      console.log("Success", res);
      // Reset the form
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <>
      <div
        className={` ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          } p-10 rounded-lg flex flex-col gap-10`}
      >
        <h1
          className="text-3xl font-bold"
          style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}
        >
          Contact
        </h1>

        <div
          className="flex flex-col lg:w-11/12 sm:w-full gap-2 p-5 rounded-lg"
          style={{
            background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
          }}
        >
          <div className="my-3">
            <h1
              className="text-2xl "
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              I'm Always Open To Discussing Product
            </h1>{" "}
            <h1
              className="text-2xl  font-bold"
              style={{
                color: `${bgcolor === "white" ? "#000000" : "white"}`,
              }}
            >
              design work or Opportunities.
            </h1>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            ref={formRef}
            className="flex flex-col gap-6 mt-6"
          >
            {/* Name */}
            <div>
              <label
                className="block mb-2 font-medium"
                style={{
                  color: bgcolor === "white" ? "#000" : "#fff",
                }}
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full p-4 rounded-xl border outline-none transition-all duration-300 focus:ring-4 focus:ring-red-300 focus:border-red-400"
                style={{
                  background:
                    bgcolor === "white" ? "#ffffff" : "#2A2A2A",
                  color: bgcolor === "white" ? "#000" : "#fff",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block mb-2 font-medium"
                style={{
                  color: bgcolor === "white" ? "#000" : "#fff",
                }}
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl border outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-300 focus:border-blue-400"
                style={{
                  background:
                    bgcolor === "white" ? "#ffffff" : "#2A2A2A",
                  color: bgcolor === "white" ? "#000" : "#fff",
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block mb-2 font-medium"
                style={{
                  color: bgcolor === "white" ? "#000" : "#fff",
                }}
              >
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl border outline-none resize-none transition-all duration-300 focus:ring-4 focus:ring-purple-300 focus:border-purple-400"
                style={{
                  background:
                    bgcolor === "white" ? "#ffffff" : "#2A2A2A",
                  color: bgcolor === "white" ? "#000" : "#fff",
                }}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full sm:w-fit px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
