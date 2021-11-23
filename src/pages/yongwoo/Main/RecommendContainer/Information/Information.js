import React from 'react';
import { INFO_LIST } from './InformationList';
import './Information.scss';

function Information() {
  return (
    <div className="information">
      <ul className="informatioinList">
        {INFO_LIST.map(info => {
          return <li key={info.id}>{info.content}</li>;
        })}
      </ul>
      <p>© 2021 INSTAGRAM FROM META</p>
    </div>
  );
}

export default Information;
