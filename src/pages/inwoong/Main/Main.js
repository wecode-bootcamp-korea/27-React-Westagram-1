import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import FeedBox from '../FeedBox/FeedBox';

function Main() {
  return (
    <div className="MainInwoong">
      <Nav />
      <div className="feedWrapper">
        <div style={{ flexGrow: 2 }} />
        <div>
          <FeedBox />
        </div>
        <div style={{ flexGrow: 0.3 }} />
        <div className="rightWrapper">
          <div className="wecodeWrapper">
            <img
              src="images/inwoong/image1.png"
              className="wecode"
              alt="wecode"
            />
            <div className="bootcampWrapper">
              <h3>wecdoe_bootcamp</h3>
              <span>WeCode ㅣ 위코드</span>
            </div>
          </div>
          <div className="story feedBox">
            <div className="smallStory">
              <span>스토리</span>
              <span className="allSee">모두보기</span>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile3.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>2_noong</h3>
                <span>3분전</span>
              </div>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile4.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>djgus23</h3>
                <span>5분전</span>
              </div>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile5.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>dkansk9871</h3>
                <span>8분전</span>
              </div>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile6.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>rain9871</h3>
                <span>1분전</span>
              </div>
            </div>
          </div>
          <div className="story feedBox">
            <div className="smallStory">
              <span>회원님을 위한 추천</span>
              <span className="allSee">모두보기</span>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile3.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>2_noong</h3>
                <span>legend 님 외 2명이..</span>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div className="follow">팔로우</div>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile4.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>djgus23</h3>
                <span>legend 님 외 2명이..</span>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div className="follow">팔로우</div>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile5.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>dkansk9871</h3>
                <span>legend 님 외 2명이..</span>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div className="follow">팔로우</div>
            </div>
            <div className="wecodeWrapper">
              <img
                src="images/inwoong/profile6.jpg"
                className="friendProfile recommand"
                alt="profile"
              />
              <div className="bootcampWrapper">
                <h3>rain9871</h3>
                <span>legend 님 외 2명이..</span>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div className="follow">팔로우</div>
            </div>
          </div>
          <footer>
            <div className="footer">
              Westagram
              정보·지원·홍보센터·API·채용정보·개인정보처리방침·약관·디렉토리·프로필·해시태그·언어
            </div>
            <span>©2021 WESTAGRAM</span>
          </footer>
        </div>
        <div style={{ flexGrow: 2 }} />
      </div>
    </div>
  );
}

export default Main;
