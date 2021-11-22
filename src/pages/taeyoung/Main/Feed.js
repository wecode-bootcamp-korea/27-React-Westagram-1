import React, { useState } from 'react';
import './Feed.scss';
import Comment from './Comment';

function Feed() {
  const [name, setName] = useState('name');
  const [newInput, setInput] = useState({
    comment: '',
    commentList: [],
  });

  // console.log(newInput);
  // input의 value를 state에 저장
  const getValue = e => {
    setInput({
      comment: e.target.value,
      commentList: [...newInput.commentList],
    });
  };

  console.log(newInput);
  console.log(newInput.comment);
  // 버튼 클릭 -> changeComment() 실행
  const buttonClick = () => {
    const add = newInput.commentList; //add변수에 commentList의 []를 저장
    // console.log(add);
    add.push(newInput.comment); // 변수 add에 input에 입력된 value를 푸시
    // console.log(add);
    setInput({
      comment: '', // 클릭 및 엔터로 댓글 작성 후 인풋창을 초기화하기 위해 ''로 변경
      commentList: add, // 위에서 합친 add의 value인 [입력값]으로 state를 변경
    });
    // console.log(setInput);
  };

  return (
    <>
      <article className="feedBox">
        <div className="feedTop">
          <div className="feedUserPorfile">
            <div className="feedUserPorfileLeft">
              <img src="/taeyoung/images/myImg.jpg" alt="img" />
            </div>
            <span>dragon__dragon_</span>
          </div>
          <img src="/taeyoung/images/ellipsis-h-solid.svg" alt="img" />
        </div>

        <div className="feedImg">
          <div className="feedContents">
            <img src="/taeyoung/images/feedImg.png" alt="img" />
          </div>
        </div>
        <div className="feedBottom">
          <div className="feedIcon">
            <div className="feedIconLeft">
              <i className="far fa-heart" />
              <i className="far fa-comment" />
              <i className="far fa-paper-plane" />
            </div>
            <div className="feedIconRight">
              <i className="far fa-bookmark" />
            </div>
          </div>

          <div className="feedUser">
            <div className="feedUserImg">
              <img src="/taeyoung/images/userImg1.jpg" alt="img" />
            </div>
            <span>sisnanaad님 외 101명이 좋아합니다.</span>
          </div>
          <div className="feedComment">
            <div className="feedCommentLeft">
              <div className="feedUserBox">
                <span className="feedUserName">dragon__dragon_</span>
                <span className="feedLike">
                  <i className="far fa-heart" />
                </span>
              </div>
              <span className="moreComment">댓글 2개 모두 보기</span>
              <span className="feedTime">1시간 전</span>
            </div>
            <ul>
              {newInput.commentList.map(element => (
                <Comment
                  comment={element}
                  name={name}
                  key={element.commentList}
                />
              ))}
            </ul>
          </div>
        </div>
      </article>

      <form
        className="reCommnet"
        action="/create_process"
        method="post"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="recommnetInput"
          placeholder="댓글 달기..."
          onChange={getValue}
          // onKeyDown={pressEnter}
          value={newInput.comment} //input 초기화
        />
        <button
          className="recommnetBt"
          onClick={buttonClick}
          disabled={newInput.comment === '' ? true : false}
        >
          게시
        </button>
      </form>
    </>
  );
}

export default Feed;
