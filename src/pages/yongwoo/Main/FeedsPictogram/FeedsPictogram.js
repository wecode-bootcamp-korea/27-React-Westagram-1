import React from 'react';
import './FeedsPictogram.scss';

function FeedsPictogram() {
  return (
    <div className="feedsPictogram">
      <div className="feedsPictogramLeft">
        <img src="images/yongwoo/heart.png" alt="하트" />
        <img
          className="speachBubble"
          src="images/yongwoo/bubble-chat.png"
          alt="speachBubble"
        />
        <img src="images/yongwoo/share.png" alt="share" />
      </div>
      <img
        className="saveIcon"
        src="https://cdn-icons-png.flaticon.com/512/84/84510.png"
        alt="save"
      />
    </div>
  );
}

export default FeedsPictogram;
