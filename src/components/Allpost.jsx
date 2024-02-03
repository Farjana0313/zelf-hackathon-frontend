import eyeImg from "../assets/images/eye.png";
import thumbImg from "../assets/images/thumb.svg";
import chatImg from "../assets/images/chat.svg"

export default function Allpost({ allpost }) {
  return (
    <div className='all-post'>
      <div className="post-header">
        <p>All posts <span>(1,240 total posts)</span></p>
        <button>View All</button>
      </div>
      <div className="post-body">
        {allpost.data?.map((item, index) => (
          <div className="post-card" key={index}>
            <div className="post-head">
              <img src={item.content.thumbnail_url} alt="" />
            </div>
            <div className="post-main">
              <p><img src={eyeImg} alt="" /> {item.content.views}</p>
              <p><img src={thumbImg} alt="" /> {item.content.likes}</p>
              <p><img src={chatImg} alt="" /> {item.content.comments}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
