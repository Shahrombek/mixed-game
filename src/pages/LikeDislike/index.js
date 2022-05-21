import React, { useState } from "react";
import "./LikeDislike.css";
import { Box, Button, Card } from "@mui/material";
import Like from "../../assets/like.png";
import DisLike from "../../assets/dislike.png";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// images
import Img1 from "../../assets/1.jpeg";
import Img2 from "../../assets/2.jpeg";
import Img3 from "../../assets/3.jpeg";
import Img4 from "../../assets/4.jpeg";
import Img5 from "../../assets/5.jpeg";
import Setting from "../../components/Setting";

const Index = () => {
  const [counter, setCounter] = useState(5);
  const [cards, setCards] = useState([
    { id: 1, select: false, img: Img1 },
    { id: 2, select: false, img: Img2 },
    { id: 3, select: false, img: Img3 },
    { id: 4, select: false, img: Img4 },
    { id: 5, select: false, img: Img5 },
  ]);

  const changeSituation = (e) => {
    cards.map((item) => {
      if (item.id === counter) item.select = e;
      return cards;
    });
    setCounter(counter - 1);
    setCards([...cards]);
  };

  const restart = () => {
    setCounter(5);
    cards.map((i) => (i.select = false));
    setCards([...cards]);
  };

  return (
    <>
      <Setting />
      <Box className={"LikeDislike"}>
        <Box className={"row"} sx={{ width: { xs: "90%", sm: "80%" } }}>
          <Box>
            <img
              onClick={() => changeSituation("dislike")}
              className={"img"}
              src={DisLike}
              alt={"DisLike"}
            />
            <ArrowBackRoundedIcon
              sx={{
                mx: { xs: 0, sm: "20px" },
                mb: { xs: "9px", sm: "6px" },
                fontSize: { xs: "25px", sm: "30px" },
              }}
              className={"icon"}
            />
          </Box>
          <Box className={"CardSection"}>
            {cards.map((i) => {
              return (
                <Card
                  key={i.id}
                  className={`Cards card${i.id}`}
                  sx={{
                    width: { xs: "140px", sm: "200px" },
                    height: { xs: "240px", sm: "300px" },
                    transform:
                      i.select === "like"
                        ? "translateX(1000px)"
                        : i.select === "dislike"
                        ? "translateX(-1000px)"
                        : "",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      backgroundPosition: "center",
                    }}
                    src={i.img}
                    alt={i.img}
                  />
                </Card>
              );
            })}
          </Box>
          <Box>
            <ArrowForwardRoundedIcon
              sx={{
                mx: { xs: 0, sm: "20px" },
                mb: { xs: "6px", sm: "3px" },
                fontSize: { xs: "25px", sm: "30px" },
              }}
              className={"icon"}
            />
            <img
              onClick={() => changeSituation("like")}
              className={"img"}
              src={Like}
              alt={"Like"}
            />
          </Box>
        </Box>
        <Button className={"restart"} onClick={restart}>
          Restart
        </Button>
      </Box>
    </>
  );
};

export default Index;
