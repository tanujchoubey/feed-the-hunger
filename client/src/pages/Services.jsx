import "../css/story.css";
import React from "react";

const Services = () => {
  return (
    <>
      <div id="services">
        <div className="container">
          <h1 className="sub-title">Our Services</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-bowl-food" />
              <h2>Collection And Transportation</h2>
              <p>
                In order to ensure the successful management of the supply
                chain, we will take into account a variety of elements,
                including the quality of food, the storage and transportation
                systems, the distribution networks, and the waste reduction
                strategies.{" "}
              </p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="bi bi-filter-left" />
              <h2>Sorting And processing</h2>
              <p>
                Depending on the nature of the source material, there are a
                plethora of sorting and processing activities utilised that
                range from labour intensive hand picking operations through to
                highly mechanised or technically complex processes. The chosen
                method of sorting will depend on many factors such as the nature
                of the waste, the ease of segregation and the yield and quality
                of the resultant recyclates.
              </p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="bi bi-people" />
              <h2>Partnering with Organizations</h2>
              <p>
                we can partner with local NGOs and restaurents so that We can be
                leaders in our communities by collecting unspoiled, healthy food
                and donating it to our neighbors in need. By donating food, we
                feeding people, not landfills, supporting local communities, and
                saving all the resources that went into producing that food from
                going to waste.
              </p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
