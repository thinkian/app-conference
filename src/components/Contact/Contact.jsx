import { useContactForm, useNav } from '../../hooks';

const Contact = () => {
  const navRef = useNav('contact');
  const [handleSubmit, message] = useContactForm();
  const msgClass = message ? 'animated tada' : 'hidden';

  return (
    <section
      ref={navRef}
      id="contact"
      className="contact-section section-padding"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Drop A Message
              </h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Contact our planning team with additonal questions or feedback
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="contact-form wow fadeInLeft" data-wow-delay="0.2s">
              <div className="form-wrapper">
                <form
                  method="post"
                  id="contactForm"
                  name="contact-form"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-line">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          autoComplete="new-name"
                          required
                        />
                        <div className="help-block with-errors">
                          <small className="text-danger">
                            Please enter your name
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 form-line">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <div className="help-block with-errors">
                          <small className="text-danger">
                            Please enter your email
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 form-line">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          autoComplete="new-name"
                          required
                        />
                        <div className="help-block with-errors">
                          <small className="text-danger">
                            Please enter your message subject
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="4"
                          id="message"
                          name="message"
                          placeholder="Enter your message..."
                          required
                        ></textarea>
                        <div className="help-block with-errors">
                          <small className="text-danger">
                            Please enter your message
                          </small>
                        </div>
                      </div>
                      <div className="form-submit">
                        <button
                          type="submit"
                          className="btn btn-common"
                          id="form-submit"
                        >
                          <i
                            className="fa fa-paper-plane"
                            aria-hidden="true"
                          ></i>
                          Send Us Now
                        </button>
                        <div
                          className={`h5 text-center text-success ${msgClass}`}
                        >
                          {message}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
