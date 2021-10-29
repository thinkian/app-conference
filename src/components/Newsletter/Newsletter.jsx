import { useNewsletter } from '../../hooks';

const Newsletter = () => {
  const handleSubmit = useNewsletter();

  return (
    <div id="subscribe" className="newsletter-section section-padding">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 col-lg-7">
            <div
              className="subscribe-inner wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <h2 className="subscribe-title">Sign Up For Our Newsletter</h2>
              <form
                className="subscribe-form form-inline flex-nowrap"
                onSubmit={handleSubmit}
                method="post"
                autoComplete="off"
                noValidate
              >
                <input
                  className="mb-20 form-control"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email Here"
                  required
                />
                <button
                  type="submit"
                  className="subscribe-btn btn btn-common"
                  data-style="zoom-in"
                  data-spinner-size="30"
                  name="submit"
                  id="submit"
                >
                  <span className="ladda-label">
                    <i className="lni-check-box"></i> Submit
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
