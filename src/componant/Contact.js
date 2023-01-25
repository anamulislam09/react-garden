import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spm88db",
        "template_77uidhj",
        form.current,
        "VP2LUR0eS7WSbywEM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("error sending message");
        }
      );
  };

  return (
    <div>
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container text-center py-5">
          <h1 class="display-3 text-white mb-4 animated slideInDown">
            Contact Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div
              class="col-lg-10 wow fadeIn m-auto text-center"
              data-wow-delay="0.1s"
            >
              <p class="fs-5 fw-bold text-primary">Contact Us</p>
              <h1 class="display-5 mb-5">
                If You Have Any Query, Please Contact Us
              </h1>
              <p class="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done
                dfghkfdghikfdhgfikdhgkfdnvfdskhgvfikdhgvbn.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a message here"
                        id="message"
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    {/* <button class="btn btn-primary py-3 px-4" type="submit">
                      Send Message
                    </button> */}
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Send Email"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="position-relative rounded overflow-hidden h-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
