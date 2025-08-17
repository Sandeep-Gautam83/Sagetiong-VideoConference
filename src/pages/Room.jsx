import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./Room.css";  

const Room = () => {
  const { id } = useParams();
  const roomId = id;
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const appID = 1185568843;
    const serverSecret = "5aabe32885c016be632126dbe5b33b0e";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "techinfoyt"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: "Your Personal link",
          url: window.location.href,
        },
      ],
      scenario: { mode: ZegoUIKitPrebuilt.VideoConference },
    });
  }, [roomId]);

  return <div className="room-container" ref={containerRef}></div>;
};

export default Room;
