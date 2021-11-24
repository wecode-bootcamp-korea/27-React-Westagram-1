import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import './Feed.scss';

function Feed() {
  const [input, setInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const onChange = event => {
    setInput(event.target.value);
    console.log(event.target.value);
    console.log(inputList);
  };
  const onClick = () => {
    // const inputObject = () => {
    //   [{
    //     "id": inputList.length - 1,
    //     "userName": "이름이양",
    //     "content": input,
    //   }]
    // }
    // inputList.push(input);
    // **** state를 직접적으로 수정할 수 없기 때문에(정확히는 권장 되지 않기 때문에) 이렇게 작성하면 안되고 아래와 같이 작성! ****
    setInputList(element => [
      ...element,
      {
        id: inputList.length + 1,
        userName: 'ladasd',
        content: input,
      },
    ]);
    setInput('');
    console.log(inputList);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setInputList(data);
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
        method="post"
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
