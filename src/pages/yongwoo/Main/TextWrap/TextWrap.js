import React from 'react';
import './TextWrap.scss';

function TextWrap() {
  return (
    <div className="textWrap">
      <p className="text">
        #모동숲 #모여봐요동물의숲 #박새로이머리 #오징어 #낚시
      </p>
      <div className="comment">
        <p className="commentNameBold">
          jeffkim01
          <span className="commentText"> 진짜 세상 부럽다... 저도 동숲...</span>
        </p>
        <i className="fas fa-heart textolorHeart" />
      </div>
      <div className="commentStart">
        <i className="far fa-trash-alt" />
        <i className="far fa-heart" />
        <i className="fas fa-heart colorHeart" />
      </div>
      <p className="commentView">54분전</p>
    </div>
  );
}

export default TextWrap;
