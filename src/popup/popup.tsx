import "../asserts/tailwind.css";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  get,
  child,
  DataSnapshot,
  onValue,
} from "firebase/database";

import { RedoOutlined } from "@ant-design/icons";
import { Button, Select, Space } from "antd";

// type PopupProps = {
// handleClick :React.MouseEventHandler<HTMLButtonElement>
// }
const firebaseConfig = {
  apiKey: "AIzaSyC5hmIb0o5WbNyPsfbYDhQljQY6HOD_AIU",
  authDomain: "appbd-ec648.firebaseapp.com",
  databaseURL:
    "https://appbd-ec648-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "appbd-ec648",
  storageBucket: "appbd-ec648.appspot.com",
  messagingSenderId: "919023215296",
  appId: "1:919023215296:web:85b4568355d0d7ef780325",
};
export default function Popup() {
  


  const showNotification = (message: string) => {
    chrome.notifications.create({
      message: message,
      title: "Thông báo",
      type: "basic",
      iconUrl: "128.jpg",
    });
  };

  const handleGetDataFromPNS = async () => {
    chrome.tabs.query(
      { active: true, lastFocusedWindow: true, currentWindow: true },
      (tabs) => {
        const tabId = tabs.length === 0 ? 0 : tabs[0].id!;
        initializeApp(firebaseConfig);
        const db = getDatabase();
        const refCCCD = ref(db, "cccd");
    
        onValue(refCCCD, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          chrome.tabs.sendMessage(
            tabId,
            {
              message: "ADD", data           },
            (response) => {
              console.log("Response from content ", response);
            }
          );
        }); 
        
      }
    );
  };
 

  return (
    <div className="m-5">
      <Space direction="vertical">
        <Space>
          
          <Button
            onClick={handleGetDataFromPNS}
            type="primary"
            icon={<RedoOutlined />}
          >Chạy</Button>
        </Space>
      </Space>
    </div>
  );
}
