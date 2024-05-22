import { useState } from "react";
import "./crew.css";
const tabArr = [
  {
    id: 1,
    title: "Douglas Hurley",
    img: "../public/assets/photo/crew-tab-one-img.png",
    desc: "Commander",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 2,
    title: "MARK SHUTTLEWORTH",
    img: "../public/assets/photo/crew-tab-two-img.png",
    desc: "Mission Specialist ",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 3,
    title: "Victor Glover",
    img: "../public/assets/photo/crew-tab-three-img.png",
    desc: "PILOT",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    id: 4,
    title: "Anousheh Ansari",
    img: "../public/assets/photo/crew-tab-four-img.png",
    desc: "Flight Engineer",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
let arr = [0, 1, 2, 3];
const Crew = () => {
  const [isTab, setIsTab] = useState(0);
  return (
    <section className="crew">
      <div className="container crewContainer">
        <h2 className="title titleTab">
          <b>02 </b>
          Meet your crew
        </h2>
        <wrap>
          <div className="info">
            <container>
            <p className="description">{tabArr[isTab].desc}</p>
            <h3 className="titleTabs">{tabArr[isTab].title}</h3>
            <div className="desc">
              <p className="information">{tabArr[isTab].info}</p>
            </div>
            </container>
            <div className="tabWrap">
            <div className="tabBtn">
              {arr.map((item) => {
                return (
                  <div
                  key={item}
                  className={isTab == item ? "active" : "circleBtn"}
                  id={item}
                  onClick={() => setIsTab(item)}
                  ></div>
                );
              })}
              </div>
            </div>
          </div>
          <div className="image">
          <img src={tabArr[isTab].img} alt="" className="photo" />

          </div>
        </wrap>
      </div>
    </section>
  );
};

export default Crew;
