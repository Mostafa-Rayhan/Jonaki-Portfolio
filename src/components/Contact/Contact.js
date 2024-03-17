import React from 'react'
import "../../styles/ContactPage.css"

const Contact = () => {
  return (
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
  )
}

export default Contact