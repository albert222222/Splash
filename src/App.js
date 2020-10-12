import React ,{useState}from "react";
import { TabManager } from "./tab-manager.jsx";
import "./App.css";
import Tweet from "./tweet";
import Sidebar from "./side_bar.jsx";


const Tabs = [
];

const App = () => {

   const[activeTab, handleTab] = useState();
   const[inputText, setInputText] = useState("");
   const[tweets, setTweets] = useState([]);
   const[picture,setPicture] = useState([]);


   return(
     <div classname = 'App'>
       <div className="flexbox-container">
       <TabManager tabs={Tabs} activeTab={activeTab} handleTab={handleTab} />
       <div className="tab-content">
       <div>{activeTab}</div>
       </div>
       <Sidebar />
       <Tweet inputText={inputText}
              setInputText={setInputText}
              tweets={tweets}
              setTweets={setTweets}
              picture={picture}
              setPicture={setPicture}
        />
      </div>
     </div>
  );
}

export default App;
