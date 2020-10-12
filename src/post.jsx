import React from "react";

const Post = ({tweet, picture}) => {

   var file = picture;
   var fr = new FileReader();
   return(
    <div className="post-box">
     <div className="post">
      <div className="username">david</div>
      <div className="content">{tweet.text}</div>
      <div><img src={ id="post_image"/></div>
      </div>
     </div>
   );
}
export default Post;
