import React from 'react'
import Image from 'react-bootstrap/Image';
import "../../styles/ContactPage.css"
import "../../Image/icon/whatsapp.png"

const Contact = () => {
  return (
    <section className="bg-light pt-5 pb-5">
    <div className="container">
      <div className={`row`}>
        <div className={`col `}>
          <div className="textWrapper">
            <h1 className="h5">Get in Touch</h1>
            <p>
              For Enroll problem or buying a project just any query just give
              us message
            </p>
          </div>
          <div className="contentWrapper">
            <div className={`d-flex gap-3 `}>
              <div className="iconPadding">
                <span>
                  <Image
                    src="/Image/icon/location.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </span>
              </div>
              <div>
                <b>
                  <p>Address</p>
                </b>
                <p>V-19 Noorjahan Road, Mohammadpur, Dhaka-1207</p>
              </div>
            </div>
            <div className={`d-flex gap-3 textWrapper`}>
              <div className="iconPadding">
                <span>
                  <Image
                    src="/Image/icon/email.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </span>
              </div>
              <div>
                <b>
                  <p>Email</p>
                </b>
                <p>basiceducation360@gmail.com</p>
              </div>
            </div>
            <div className={`d-flex gap-3`}>
              <div className="iconPadding">
                <span>
                  <Image
                    src="/Image/icon/phone.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </span>
              </div>
              <div>
                <b>
                  <p>Phone Number</p>
                </b>
                <div>
                  <p>+88015 6830 8586</p>
                </div>
              </div>
            </div>
          </div>
          <div className="socialSection">
            <div>
              <b>
                <p className="mt-2">SOCIAL MEDIA</p>
              </b>

              <div className={`d-flex gap-3 align-items-center`}>
                <a href="https://www.facebook.com/basiceducation0to100">
                  <Image
                    className="link"
                    src="/Image/icon/facebook.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </a>
                <a href="https://www.facebook.com/basiceducation0to100">
                  <Image
                    src="/Image/icon/linkedin.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </a>
                <a href="https://www.facebook.com/basiceducation0to100">
                  <Image
                    src="../../Image/icon/whatsapp.png"
                    alt="img"
                    width="50"
                    height="50"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`col`}>
          
            <div className="container">
                {/* <div className="text-center">
                    <h1>Contact Us</h1>
                    <p>Contact us for any query</p>
                </div> */}
                <div className="formBackground">
                    <div>
                        <div className="mb-4">
                            <h2>Send a Message</h2>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <form>
                                            <div className="formInfo">
                                                <label>
                                                    Name
                                                    <span className="required_label">*</span>
                                                </label>
                                                <br />
                                                <input
                                                    className="inputForm"
                                                    id="name"
                                                    required
                                                    type="text"
                                                    placeholder="Your Name"
                                                />
                                                <br />
                                                <label for="exampleInputEmail1">
                                                    Email <span className="required_label">*</span>
                                                </label>
                                                <br />
                                                <input
                                                    className="inputForm"
                                                    type="email"
                                                    placeholder="Email Address"
                                                    required
                                                />
                                                <br />
                                                <label>
                                                    Phone <span className="required_label">*</span>
                                                </label>
                                                <br />
                                                <input
                                                    className="inputForm"
                                                    type="number"
                                                    placeholder="Your Phone Number"
                                                    required
                                                />
                                                <br />
                                                <label>
                                                    Comment or Message
                                                    <span className="required_label">*</span>
                                                </label>
                                                <br />
                                                <textarea
                                                    name="comment"
                                                    id="comment"
                                                    className="inputForm"
                                                    placeholder="Details what you need to say"
                                                    required
                                                />
                                                <div className="mt-5">
                                                    <button className="button">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
      {/* <div className={`d-flex justify-content-spacebetween `}></div> */}
    </div>
  </section>

  )
}

export default Contact