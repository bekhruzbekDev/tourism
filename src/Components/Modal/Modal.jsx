import "./modal.css";
import Cross from "../../../public/assets/icons/cross.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Modal = ({ setIsActive }) => {
  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="cross" onClick={() => setIsActive(false)}>
          <Cross />
        </div>
        <ul className="list">
          <li>
            <Link to="/home">
              <b>00</b> HOME
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <b>01</b> DESTINATION
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <b>02</b> CREW
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <b>03</b> TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  setIsActive: PropTypes.func,
};
