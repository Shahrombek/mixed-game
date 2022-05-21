import { Box, IconButton, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Chat = () => {
  const inputRef = useRef("");
  const [openChat, setOpenChat] = useState(false);
  const [chatData, setChatData] = useState([]);
  const [chatArea, setChatArea] = useState(true);

  const chat = (logik) => {
    setOpenChat(logik);
    logik === false
      ? setChatArea(true)
      : setTimeout(() => setChatArea(false), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatData([...chatData, inputRef.current.value]);
    inputRef.current.value = "";
  };

  // Scroll to Bottom
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  return (
    <>
      <Box
        onClick={() => chat(false)}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 101,
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.4)",
          display: !openChat ? "none" : "block",
        }}
      ></Box>
      <Box
        className={"circleChat"}
        sx={{
          bottom: openChat ? 20 : "50px",
          right: openChat ? 20 : { xs: "40px", sm: "100px" },
          borderRadius: openChat ? "10px" : "50%",
          width: openChat ? "300px" : "50px",
          height: openChat ? "400px" : "50px",
        }}
      >
        {openChat ? (
          <Box
            sx={{
              width: "290px",
              height: "390px",
              background: "white ",
              borderRadius: "10px",
              display: chatArea ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "20px",
              }}
            >
              <Button
                onClick={() => chat(false)}
                sx={{
                  color: "black",
                  background: "white",
                  "&:hover": { background: "white" },
                  borderBottomRightRadius: "10px",
                  p: "3px",
                }}
              >
                <KeyboardArrowDownRoundedIcon sx={{ fontSize: "30px" }} />
              </Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                flex: 1,
                background: `url("https://thumbs.dreamstime.com/b/seamless-mobile-apps-pattern-web-page-64452032.jpg")`,
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              {chatData.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: "80%",
                      background: "white",
                      p: "6px 10px",
                      m: "4px 5px",
                      borderRadius: "8px",
                      borderBottomRightRadius: "0px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item}
                  </Box>
                );
              })}
              <div ref={messagesEndRef} />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "50px",
                boxShadow: "0px -2px 5px 0px rgba(34, 60, 80, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton>
                <AttachFileIcon sx={{ transform: "rotate(210deg)" }} />
              </IconButton>
              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  className="message"
                  placeholder="Send a message"
                />
                <IconButton type="submit">
                  <SendRoundedIcon />
                </IconButton>
              </form>
            </Box>
          </Box>
        ) : (
          <ChatRoundedIcon
            onClick={() => chat(true)}
            sx={{ fontSize: "35px !important", color: "white" }}
          />
        )}
      </Box>
    </>
  );
};

export default Chat;
