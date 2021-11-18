import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

function Nav() {
  return (
    <div className="nav">
      <div style={{ flexGrow: 0.3 }} />
      <div className="logoBox">
        <img
          className="instaLogo"
          src="/images/inwoong/instaLogo.png"
          alt="instalogo"
        />
      </div>
      <div>
        <h1 className="instaTitle">
          <span class="border">ㅣ</span> Westagram
        </h1>
      </div>
      <div style={{ flexGrow: 1 }} />
      <div>
        {/* <FontAwesomeIcon icon={faSearch} /> */}
        <input className="inputBox" type="text" placeholder="검색" />
      </div>
      <div style={{ flexGrow: 1 }} />
      <div>
        <FontAwesomeIcon icon={faCompass} className="rightIcon" />
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} className="rightIcon" />
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} className="rightIcon" />
      </div>
      <div style={{ flexGrow: 0.3 }} />
    </div>
  );
}

export default Nav;
