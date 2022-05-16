import React from "react";

//Team Information
function TeamInfo() {
  return (
    <>
      <div className="message-up">
        Without bonding and coordination, every project is a failure. Look at
        who makes KICKSUP great;)
      </div>
      <div className="row team">
        <div className="column col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
          <div className="teamcard">
            <div className="people">
              <img src="/kicksup/images/zidane.jpg" alt="Zidane" />
            </div>
            <div className="people-info">
              <h4 className="name">Zidane</h4>
              <p className="designation">Leadership &#38; management</p>
            </div>
            <div className="people-div">
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/linkedin.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/medium.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/facebook@3x.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="column col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
          <div className="teamcard">
            <div className="people">
              <img src="/kicksup/images/tonikroos.jpg" alt="Toni Kroos" />
            </div>
            <div className="people-info">
              <h4 className="name">Toni Kroos</h4>
              <p className="designation">Product developer</p>
            </div>
            <div className="people-div">
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/linkedin.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/medium.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="column col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
          <div className="teamcard">
            <div className="people">
              <img src="/kicksup/images/ikercasillas.jpg" alt="Iker Casillas" />
            </div>
            <div className="people-info">
              <h4 className="name">Iker Casillas</h4>
              <p className="designation">Marketing strategy</p>
            </div>
            <div className="people-div">
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/medium.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="column col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
          <div className="teamcard">
            <div className="people">
              <img src="/kicksup/images/james.jpg" alt="James" />
            </div>
            <div className="people-info">
              <h4 className="name">James</h4>
              <p className="designation">Product designer</p>
            </div>
            <div className="people-div">
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/linkedin.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/medium.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/facebook@3x.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="column col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2">
          <div className="teamcard">
            <div className="people">
              <img src="/kicksup/images/christiano.jpg" alt="Ronaldo" />
            </div>
            <div className="people-info">
              <h4 className="name">Cristiano</h4>
              <p className="designation">Financial Operations</p>
            </div>
            <div className="people-div">
              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/linkedin.png"
                  alt=""
                />
              </a>

              <a href="/">
                <img
                  className="people-contact"
                  src="/kicksup/images/facebook@3x.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="message-down">and You!;)</div>
    </>
  );
}
export default TeamInfo;
