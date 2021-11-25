import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import './Feed.scss';

function Feed({ src, id, userName, likePeople }) {
  const [input, setInput] = useState('');
  const [inputList, setInputList] = useState([]);

  const onChange = event => {
    setInput(event.target.value);
  };

  const onClick = () => {
    setInputList(element => [
      ...element,
      {
        id: inputList.length + 1,
        userName: '이름',
        content: input,
      },
    ]);
    setInput('');
  };

  useEffect(() => {
    fetch('/data/commentData.json', {
      // http://localhost:3000 해당부분(로컬호스트)는 생략가능- 로컬호스트 번호가 바뀔 때마다 자동으로 로컬호스트를 잡아주기 때문에 오류발생을 막을 수 있다.
      method: 'GET',
    })
      .then(res => res.json())
      .then(commentData => {
        setInputList(commentData);
      });
  }, []);

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
            <img src={src} key={id} alt="img" />
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
            <span>
              {userName}님 외 {likePeople}명이 좋아합니다.
            </span>
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
              {inputList.map(list => {
                return (
                  <Comment
                    key={list.id}
                    name={list.userName}
                    comment={list.content}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </article>

      <form
        className="reCommnet"
        action="/create_process"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={input}
          className="recommnetInput"
          placeholder="댓글 달기..."
          onChange={onChange}
        />
        <button
          className="recommnetBt"
          onClick={onClick}
          disabled={input === '' ? true : false}
        >
          게시
        </button>
      </form>
    </>
  );
}

export default Feed;
