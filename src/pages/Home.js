import { Box } from "@mui/material";
import React from "react";
import Cards from "../components/Cards";
import Game1 from "../assets/game1.jpg";
import Game2 from "../assets/game2.jpg";
import Game3 from "../assets/game3.jpg";
import Game4 from "../assets/game4.jpg";
import Bg from "../assets/bg.jpeg";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
        backgroundImage: `url(https://cdn.cssauthor.com/wp-content/uploads/2015/01/Lazeez-watercolor-textures-4K-UDH-backgrounds.jpg?strip=all&lossy=1&resize=1000%2C500&ssl=1)`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition:'center'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Cards title="tosh-qaychi-qogoz" url={Game1} />
        <Cards title="tic-tac-toe" url={Game2} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Cards title="todo" url={Game3} />
        <Cards title="like-dislike" url={Game4} />
      </Box>
    </Box>
  );
};

export default Home;
