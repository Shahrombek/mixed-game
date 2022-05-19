import React, { useState } from "react";
import "./Index.css";
import { Box, Button } from "@mui/material";
import Tosh from "../../assets/tosh.png";
import Qogoz from "../../assets/qogoz.png";
import Qaychi from "../../assets/qaychi.png";

const arr = [
  {
    id: 1,
    src: Tosh,
  },
  {
    id: 2,
    src: Qogoz,
  },
  {
    id: 3,
    src: Qaychi,
  },
];

const Index = () => {
  console.log('asd');
  const [user, setUser] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState({ user: 0, computer: 0 });

  const change = (item) => {
    setUser(item);

    const timer = setInterval(() => {
      let random = Math.floor(Math.random() * 10) % 3;
      setComputer(arr[random]);
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
      score();
    }, 3000);
  };

  const score = () => {
    console.log(user);
    console.log(computer);
    // if (user.id !== computer.id) setResult("Draw");
    if (
      (computer.id === 1 && user.id === 3) ||
      (computer.id === 2 && user.id === 1) ||
      (computer.id === 3 && user.id === 2)
    ) {
      result.computer += 1;
    } else if (
      (computer.id === 3 && user.id === 1) ||
      (computer.id === 1 && user.id === 2) ||
      (computer.id === 2 && user.id === 3)
    ) {
      result.user += 1;
    }
    setResult({...result});
  };

  return (
    <Box className={"ToshQaychiQogoz"}>
      <Box sx={{ maxWidth: 500 }}>
        <Box className={"items"} sx={{ width: { xs: "270px", sm: "400px" } }}>
          {arr.map((item, index) => {
            return (
              <Button key={index} onClick={() => change(item)}>
                <img src={item.src} alt={`${item.src}`} />
              </Button>
            );
          })}
        </Box>

        <Box className={"area"} sx={{ width: { xs: "314px", sm: "444px" } }}>
          <Box className={"line"}>
            <Box className={"box"}>
              <img src={user.src} alt="" />
            </Box>
            <p>You </p>
            <h3>{result.user}</h3>
          </Box>

          <span>VS</span>

          <Box className={"line"}>
            <Box className={"box"}>
              <img src={computer.src} alt="" />
            </Box>
            <p>Computer </p>
            <h3>{result.computer}</h3>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
