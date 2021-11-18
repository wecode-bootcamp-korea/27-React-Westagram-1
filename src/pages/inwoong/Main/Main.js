import './Main.scss';
import { useState } from 'react';
import Comments from '../Comment/Comment';
import Nav from '../../../components/Nav/Nav';

function Main() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  function handleCommentValue(event) {
    setComment(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setComments(prev => [...prev, comment]);
    setComment('');
  }

  return (
    <div className="MainInwoong">
      <Nav />
      <div className="feedWrapper">
        <div style={{ flexGrow: 2 }} />
        <div className="feedBox">
          <div className="feedTopBox">
            <div>
              <img
                className="image box-margin"
                src="images/inwoong/profile.jpg"
                alt="profile"
              />
            </div>
            <div className="box-margin mj">
              <h2>cannon_mj</h2>
            </div>
            <div style={{ flexGrow: 1 }} />
            <div className="dot-margin">
              <i className="fas fa-ellipsis-h dot" />
            </div>
          </div>
          <div className="imageWrapper">
            <img
              className="feedImage"
              src="images/inwoong/feed.jpg"
              alt="profile"
            />
          </div>
          <div className="commentWrapper">
            <div className="fontWrapper">
              <i className="far fa-heart leftIcon" />
              <i className="far fa-comment leftIcon" />
              <i className="fas fa-share-alt leftIcon" />
              <i className="far fa-bookmark bookmark" />
            </div>
            <div className="likeWrapper">
              <img
                src="images/inwoong/profile2.jpg"
                className="smallImage box-margin"
                alt="profile"
              />
              <p className="likeComment">
                <span className="bold">ainworld</span>님{' '}
                <span className="bold">외 10명</span>이 좋아합니다
              </p>
            </div>
            <div>
              <p className="box-margin bottom-margin">
                <span className="bold likeComment">cannon_mj</span>
                <span className="likeComment">
                  위워크에서 진행한 베이킹 클래스...
                </span>{' '}
                <span className="likeComment add">더 보기</span>
              </p>
            </div>
            <div>
              <p className="box-margin bottom-margin">
                <span className="bold likeComment">seongjae99</span>
                <span className="likeComment">거봐 좋았잖아 ~~~</span>{' '}
              </p>
            </div>
            <div className="commentBox" />
            <Comments comments={comments} />
            <div>
              <span className="time">42분전</span>
            </div>
            <div className="inputWrapper">
              <form onSubmit={onSubmit}>
                <input
                  className="input-Box"
                  type="text"
                  value={comment}
                  placeholder="댓글달기..."
                  onChange={handleCommentValue}
                />
                <button className="post">게시</button>
              </form>
            </div>
          </div>
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
