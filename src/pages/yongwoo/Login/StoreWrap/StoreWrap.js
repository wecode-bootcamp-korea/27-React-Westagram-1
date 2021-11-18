import React from 'react';
import './StoreWrap.scss';

function StoreWrap() {
  return (
    <article className="storeWrap">
      <img
        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
        alt="appStore"
      />
      <img
        src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
        alt="googlePlay"
      />
    </article>
  );
}

export default StoreWrap;
