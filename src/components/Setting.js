import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import Audios from "../assets/audio.m4a";

const Setting = () => {
  const navigate = useNavigate();
  const [audio] = useState(new Audio(Audios));
  const [temp, setTemp] = useState(false);

  useEffect(() => {
    window.sessionStorage.setItem("play", 1);
  }, []);

  const changeTemp = () => {
    var temp = window.sessionStorage.getItem("play");
    var prop = temp === "0" ? 1 : 0;

    prop !== 1 ? audio.play() : audio.pause();
    window.sessionStorage.setItem("play", prop);

    setTemp(window.sessionStorage.getItem("play") !== "1");
  };

  const home = () => {
    audio.pause();
    navigate("/");
  };
  return (
    <Box>
      <Button
        onClick={() => home()}
        sx={{
          position: "fixed",
          top: "50px",
          left: { xs: "40px", sm: "100px" },
          zIndex: 100,
          borderRadius: "50%",
          minWidth: "40px !important",
          height: "50px !important",
        }}
      >
        <HomeRoundedIcon sx={{ fontSize: "35px !important", color: "white" }} />
      </Button>

      <Button
        onClick={changeTemp}
        sx={{
          position: "fixed",
          top: "50px",
          right: { xs: "40px", sm: "100px" },
          zIndex: 100,
          borderRadius: "50%",
          minWidth: "40px !important",
          height: "50px !important",
        }}
      >
        {temp ? (
          <VolumeUpIcon sx={{ fontSize: "35px !important", color: "white" }} />
        ) : (
          <VolumeOffIcon sx={{ fontSize: "35px !important", color: "white" }} />
        )}
      </Button>

      <Chat />
    </Box>
  );
};

export default Setting;
