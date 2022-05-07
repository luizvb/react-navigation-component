import React, { useState }  from "react";
import "./index.css";

export default function NavBar() {

  const [activePage, setActivePage] = useState("home");

  const pageText = {
    home: "HOME PAGE",
    about: "ABOUT PAGE",
    contact: "CONTACT PAGE",
    news: "NEWS PAGE",
  }

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a onClick={() => setActivePage("home")} >Home</a>
          <a onClick={() => setActivePage("news")}>News</a> 
          <a onClick={() => setActivePage("contact")}>Contact</a>
          <a onClick={() => setActivePage("about")}>About</a>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>{pageText[activePage]}</span>
        </section>
      </div>
    </div>
  );
}