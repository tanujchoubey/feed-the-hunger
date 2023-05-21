import React from "react";
import "../css/story.css";

const Story = () => {
  return (
    <>
      <div id="Story">
        <div className="container">
          <h1 className="sub-title">Our Story</h1>
          <div className="work-list">
            <div className="work">
              <img src="images/story 1.png" alt="Certificate 1" />
              <div className="layer">
                <p>
                  FLOCK was a long event conducted that included guided mentor
                  sessions, guest lectures and project building from scratch.{" "}
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="work">
              <img src="images/story 2.png" alt="" />
              <div className="layer">
                <h3>SKILLUP [Iot]</h3>
                <p>
                  Have learn some basics of Iot. Advancing my career in IoT.{" "}
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
            <div className="work">
              <img src="images/story 3.png" alt="Certificate 3" />
              <div className="layer">
                <h3>GOOGLE [Project Management]</h3>
                <p>
                  I have discover foundational project management terminology
                  and gain a deeper understanding of the role and
                  responsibilities of a project manager.{" "}
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See more
          </a>
        </div>
      </div>
    </>
  );
};

export default Story;
