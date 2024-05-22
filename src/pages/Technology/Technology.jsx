import { useState } from "react";
import "./technology.css";
let arr = [1, 2, 3];
let tabs = [
  {
    id: 1,
    title: "LAUNCH VEHICLE",
    desc: "THE TERMINOLOGY…",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img:"../public/assets/photo/technology-tab-one.png"
  },
  {
    id: 2,
    title: "SPACEPORT",
    desc: "THE TERMINOLOGY…",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img:"../public/assets/photo/technology-tab-two.png"
  },
  {
    id: 3,
    title: "SPACE CAPSULE",
    desc: "THE TERMINOLOGY…",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img:"../public/assets/photo/technology-tab-three.png"
  },
];
const Technology = () => {
  const [isTab, setIsTab] = useState(1);
  return (
    <section className="technology">
      <div className="container technologyContainer">
        <h2 className="title techTitle">
          <b>03</b> SPACE LAUNCH 101
        </h2>
        <wrapper>
          <div className="techInfo">
            <div className="tab">
              {arr.map((item) => {
                return (
                  <div
                    key={item}
                    className={isTab == item ? "tab-active" : "tabb"}
                    onClick={() => setIsTab(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="text">
              <p className="infoTitle">{tabs[isTab - 1].desc}</p>
              <h4 className="titleText">{tabs[isTab - 1].title}</h4>
              <p className="descriptions">{tabs[isTab - 1].info}</p>
            </div>
          </div>
          <div className="techPhoto">
            <img src={tabs[isTab - 1].img} alt="" />
          </div>
        </wrapper>
      </div>
    </section>
  );
};

export default Technology;
