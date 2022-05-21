import React, { useEffect, useState } from "react";
import "./ToshQaychiQogoz.css";
import { Box, Button } from "@mui/material";
import Tosh from "../../assets/tosh.png";
import Qogoz from "../../assets/qogoz.png";
import Qaychi from "../../assets/qaychi.png";
import Setting from "../../components/Setting";

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
  const [user, setUser] = useState("");
  const [computer, setComputer] = useState("");
  const [result, setResult] = useState({ user: 0, computer: 0 });
  const [chatchResult, setCatchResult] = useState(1);

  const change = (item) => {
    setUser(item);

    const timer = setInterval(() => {
      let random = Math.floor(Math.random() * 10) % 3;
      setComputer(arr[random]);
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
      setCatchResult(Math.random());
    }, 2000);
  };

  useEffect(() => {
    var c = computer.id;
    var u = user.id;
    if ((c === 1 && u === 3) || (c === 2 && u === 1) || (c === 3 && u === 2)) {
      result.computer += 1;
    }
    if ((c === 3 && u === 1) || (c === 1 && u === 2) || (c === 2 && u === 3)) {
      result.user += 1;
    }
    setResult({ ...result });
  }, [chatchResult]);

  const restart = () => {
    setUser("");
    setComputer("");
    setResult({ user: 0, computer: 0 });
  };

  return (
    <>
      <Setting />
      <Box className={"ToshQaychiQogoz"}>
        <Box className={"container"}>
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

            <span className="vs">VS</span>

            <Box className={"line"}>
              <Box className={"box"}>
                <img src={computer.src} alt="" />
              </Box>
              <p>Computer </p>
              <h3>{result.computer}</h3>
            </Box>
          </Box>

          <Button className={"restart"} onClick={restart}>
            Restart
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Index;
