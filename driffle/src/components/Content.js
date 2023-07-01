import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div class="content">
      <h2 className="heading">
        Driffle is a <span> one-stop shop </span> <br /> for all your gaming
        needs!
      </h2>
      <p className="sub">
        Not only do we sell games, but also offer gift cards, DLC's, and more.
        Driffle is a marketplace, so you can find <br /> a wide variety of items
        from different sellers in one place. We are committed to the future of
        gaming and strive to <br /> make our platform safe, affordable, and
        sustainable for all users. Whether you're looking for the latest
        releases <br />
        or hard-to-find classics, you're sure to find what you're looking for on
        Driffle.
      </p>
      <br />
      <button>Visit our store</button>
    </div>
  );
};

export default Content;
