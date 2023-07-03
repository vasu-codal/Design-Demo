import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="slogen">
          Ut urna vulputate adipiscing mi amet.
          <div className="button-hero">
            <button>Shop category</button>
            <button>Shop category</button>
          </div>
        </div>
      </div>
      <div className="shop-by-container">
        <span className="title">SHOP BY CATEGORY</span>
        <div className="card-container">
          <ul>
            <li>
              <span className="shop-by-card">
                category 1 <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
            <li>
              <span className="shop-by-card">
                category 1 <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
            <li>
              <span className="shop-by-card">
                category 2 <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
            <li>
              <span className="shop-by-card">
                category 3 <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
            <li>
              <span className="shop-by-card">
                category 4 <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
            <li>
              <span className="shop-by-card">
                category 5 <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
