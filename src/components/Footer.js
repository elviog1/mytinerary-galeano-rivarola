import React from "react";
import "../styles/Footer.css";
import { Link as LinkRouter } from "react-router-dom";
import { useEffect, useState } from 'react'
// const pages = [
//   { name: "Home", to: "/" },
//   { name: "Cities", to: "/cities" },
//   { name: "New City", to: "/newcity" },
//   { name: "Edit city", to: "/editcity" },
// ];

export default function Footer() {
  const [userId, setUserId] = useState("");
  // const para chequear si un usuario esta logeado
  const [logged, setLogged] = useState(false);

  // renderizado de links del nav
  const pagesNoLogged = [
    { name: "Home", to: "/" },
    { name: "Cities", to: "/cities" },
  ];
  const pagesLogged = [
    { name: "Home", to: "/" },
    { name: "Cities", to: "/cities" },
    { name: "New Itinerary", to: "/newitinerary" },
    { name: "My Tineraries", to: `/itineraries/${userId}` },
  ];
  const pagesAdmin = [
    { name: "Home", to: "/" },
    { name: "Cities", to: "/cities" },
    { name: "Edit city", to: "/editcity" },
    { name: "Edit Itinerary", to: "/edititinerary" },
    { name: "New City", to: "/newcity" },
    { name: "New Itinerary", to: "/newitinerary" },
    { name: "My Tineraries", to: `/itineraries/${userId}` },
    { name: "New Admin", to: `/newadmin` },
  ];

  const link = (page) => (
    <LinkRouter key={page.name} to={page.to} className="Footer-link">
      {page.name}
    </LinkRouter>
  );

  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) && setLogged(true);
    const user = JSON.parse(localStorage.getItem("user"));
    user ? setUserId(user.id) : setUserId("");
  }, []);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let fecha = new Date();
  let año = fecha.getFullYear();
  

  return (
    <div className="Footer-div">
      <LinkRouter to="/">
        <p className="Footer-title">
          <span className="Footer-my">My</span>Tinerary
        </p>
      </LinkRouter>
      <div className="footer-links">
        {/* <p className="Footer-nav">{pages.map(link)}</p> */}
        {!logged ? (
        <div>{pagesNoLogged.map(link)}</div>
        ) : (<div>
          {JSON.parse(localStorage.getItem('user')).role === "admin" ? pagesAdmin.map(link) : pagesLogged.map(link)}
        </div>
          )
        }
      </div>
      <div className="Footer-redes">
        <a href="https://api.whatsapp.com/send/?phone=5491115151515&text&type=phone_number&app_absent=0">
          <img
            className="Footer-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt="logo-whatsapp"
          />
        </a>
        <a href="https://www.instagram.com/mytinerary_/">
          <img
            className="Footer-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            alt="logo-whatsapp"
          />
        </a>
        <a href="https://twitter.com/MytineraryApp">
          <img
            className="Footer-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt="logo-whatsapp"
          />{" "}
        </a>
      </div>
      <button onClick={scrollTo} className="top">
        ▲Bop to the top▲
      </button>
      <p className="Footer-nav">{año}</p>
    </div>
  );
}
