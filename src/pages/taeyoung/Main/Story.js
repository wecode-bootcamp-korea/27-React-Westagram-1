import UserMeta from './UserMeta';
import './Story.scss';

function Story() {
  return (
    <div className="feedContainer">
      <div className="storyBox">
        <UserMeta />
        <UserMeta />
        <UserMeta />
        <UserMeta />
        <UserMeta />
        <UserMeta />
        <UserMeta />
        <UserMeta />
      </div>
    </div>
  );
}

export default Story;
