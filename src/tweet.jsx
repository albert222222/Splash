import React,{useState} from "react";
import Post from "./post";
import Picker from "emoji-picker-react";
import ImageUploader from "react-images-upload";


const Tweet = ({inputText, setInputText, tweets, setTweets, setPicture, picture}) => {

  const[emojiHandler,setEmojiHandler] = useState(false);
  const[imageHandler,setImageHandler] = useState(false);

  const inputTextHandler = (e) => {
     setInputText(e.target.value);
  }

  const tweetHandler = () => {
    setTweets([...tweets,{text:inputText}]);
    setInputText("");
  }

  const onEmojiClick = (event,emojiObject)=>{
   setInputText(inputText.concat(emojiObject.emoji));
  }

  const onDrop = (file) => {
    setPicture(...picture,{image:file});
    setImageHandler(!imageHandler);
  }

  return(
    <div className="tweet-container">
      <table>
        <tr><td>Home</td></tr>
        <tr>
          <td>
            <input type="text" id="tweet-input" placeholder="What's happening?" onChange={inputTextHandler} value={inputText}></input>
            <hr />
            <span onClick={() => setEmojiHandler(!emojiHandler)} style={{cursor:"pointer"}}>&#128515;</span>
            {emojiHandler? <Picker onEmojiClick={onEmojiClick} disableSearchBar={true}/>:""}
            <i class="fa fa-image" style={{padding:"10px"}} onClick={()=>setImageHandler(!imageHandler)}></i>
            {imageHandler? <ImageUploader withIcon={false} label={""} onChange={onDrop}/>:""}
            <button style={{float:"right"}} onClick={tweetHandler}>Tweet</button>
         </td>
        </tr>
        {tweets.map((tweet) => (
            <tr><td><Post tweet={tweet} picture={picture}/></td></tr>
          ))}
      </table>
    </div>
  );
}

export default Tweet;
