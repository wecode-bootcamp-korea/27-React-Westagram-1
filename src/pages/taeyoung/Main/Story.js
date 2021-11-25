import StoryUserMeta from './StoryUserMeta';
import './Story.scss';

function Story() {
  return (
    <div className="feedContainer">
      <div className="storyBox">
        <StoryUserMeta />
      </div>
    </div>
  );
}

export default Story;
