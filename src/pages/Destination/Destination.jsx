import { useState } from "react";
import "./destination.css";
const tabsList = [
  { id: 1, text: "MOON" },
  { id: 2, text: "MARS" },
  { id: 3, text: "EUROPA" },
  { id: 4, text: "TITAN" },
];
const tab = [
  {
    id: 1,
    title: "MOON",
    img: "../public/assets/photo/moon.png",
    info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avg: "384,400 km",
    est: "3 days",
  },
  {
    id: 2,
    title: "MARS",
    img: "../public/assets/photo/mars.png",
    info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avg: "225 MIL. km",
    est: "9 months",
  },
  {
    id: 3,
    title: "EUROPA",
    img: "../public/assets/photo/europa.png",
    info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avg: "628 MIL. km",
    est: "3 years",
  },
  {
    id: 4,
    title: "TITAN",
    img: "../public/assets/photo/titan.png",
    info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avg: "1.6 BIL. km",
    est: "7 years",
  },
];
const Destination = () => {
  const [tabActive, setTabActive] = useState(1);
  return (
    <section className="destination">
      <div className="container destinationContainer">
        <h2 className="title">
          <b>01</b> Pick your destination
        </h2>
        <div className="wrapper">
          <img src={tab[tabActive - 1].img} alt="" />
          <div className="infoTabs">
            <ul className="tabList">
              {tabsList.map((item) => {
                const { id, text } = item;
                return (
                  <li
                    key={id}
                    className={tabActive - 1 == id ? "tabActive" : ""}
                    onClick={() => setTabActive(id)}
                  >
                    {text}
                  </li>
                );
              })}
            </ul>

            <h2>{tab[tabActive - 1].title}</h2>
            <p>{tab[tabActive - 1].info}</p>
            <hr className="hr" />
            <div className="wrap">
              <div>
                <p>AVG. DISTANCE</p>
                <h3>{tab[tabActive - 1].avg}</h3>
              </div>
              <div>
                <p>Est. travel time</p>
                <h3>{tab[tabActive - 1].est}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
