import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cards({ title, url }) {
  const navigate = useNavigate();

  const ChangeGame = () => {
    navigate(`/${title}`);
  };
  return (
    <Card
      onClick={ChangeGame}
      sx={{
        width: { xs: 150, sm: 250, md: 300, lg: 345 },
        borderRadius: 4,
        boxShadow: "0px 2px 10px 0px rgba(34, 60, 80, 0.5)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            objectFit: "cover",
            backgroundPosition: "center",
            height: { xs: "150px", sm: "190px", md: "220px" },
          }}
          image={url}
          alt="game"
        />
      </CardActionArea>
    </Card>
  );
}
