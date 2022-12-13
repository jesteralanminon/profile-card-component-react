import "./profile-card.css";
import image from "../assets/image-victor.jpg";
import React from "react";

function Form({ name, age, location, followers, likes, photos }) {
  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }
  return (
    <form>
      <div className="container-card-main">
        <div className="upper-container">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="container-card-1">
          <div className="container-name-age">
            <h2 className="userName">{name}</h2>
            <h2 className="userAge">{age}</h2>
          </div>
          <h2 className="userLocation">{location}</h2>
        </div>
        <div className="container-card-2">
          <div className="item-1">
            {nFormatter(followers)}
            <h3>Followers</h3>
          </div>
          <div className="item-2">
            {nFormatter(likes)}
            <h3>Likes</h3>
          </div>
          <div className="item-3">
            {nFormatter(photos)}
            <h3>Photos</h3>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
