import React, { useState } from "react";
import "./TicTacToe.css";
import { Box, Button, Grid } from "@mui/material";
import Setting from "../../components/Setting";

const Index = () => {
  const [arr, setArr] = useState([
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
  ]);
  const [counter, setCounter] = useState(1);
  const [end, setEnd] = useState(false);

  const clickBtn = (item) => {
    setCounter(counter + 1);

    arr.map((e) => {
      if (e.id === item.id) {
        counter % 2 === 1 ? (e.value = "X") : (e.value = "O");
      }
      return setArr(arr);
    });

    setArr([...arr]);
    if (
      arr[0].value === arr[1].value &&
      arr[1].value === arr[2].value &&
      arr[0].value !== null
    ) {
      arr[0].isWin = true;
      arr[1].isWin = true;
      arr[2].isWin = true;
      setEnd(true);
    }
    if (
      arr[3].value === arr[4].value &&
      arr[4].value === arr[5].value &&
      arr[3].value !== null
    ) {
      arr[3].isWin = true;
      arr[4].isWin = true;
      arr[5].isWin = true;
      setEnd(true);
    }
    if (
      arr[6].value === arr[7].value &&
      arr[7].value === arr[8].value &&
      arr[6].value !== null
    ) {
      arr[6].isWin = true;
      arr[7].isWin = true;
      arr[8].isWin = true;
      setEnd(true);
    }
    if (
      arr[0].value === arr[3].value &&
      arr[3].value === arr[6].value &&
      arr[0].value !== null
    ) {
      arr[0].isWin = true;
      arr[3].isWin = true;
      arr[6].isWin = true;
      setEnd(true);
    }
    if (
      arr[1].value === arr[4].value &&
      arr[4].value === arr[7].value &&
      arr[1].value !== null
    ) {
      arr[1].isWin = true;
      arr[4].isWin = true;
      arr[7].isWin = true;
      setEnd(true);
    }
    if (
      arr[2].value === arr[5].value &&
      arr[5].value === arr[8].value &&
      arr[2].value !== null
    ) {
      arr[2].isWin = true;
      arr[5].isWin = true;
      arr[8].isWin = true;
      setEnd(true);
    }
    if (
      arr[0].value === arr[4].value &&
      arr[4].value === arr[8].value &&
      arr[0].value !== null
    ) {
      arr[0].isWin = true;
      arr[4].isWin = true;
      arr[8].isWin = true;
      setEnd(true);
    }
    if (
      arr[2].value === arr[4].value &&
      arr[4].value === arr[6].value &&
      arr[2].value !== null
    ) {
      arr[2].isWin = true;
      arr[4].isWin = true;
      arr[6].isWin = true;
      setEnd(true);
    }
    var count = 0;
    arr.map((item) => {
      if (item.value !== null) count++;
      return arr;
    });
    if (count === arr.length) setEnd(true);
  };

  const restart = () => {
    arr.map((item) => {
      item.value = null;
      item.isWin = false;
      return arr;
    });
    setArr([...arr]);
    setCounter(1);
    setEnd(false);
  };

  return (
    <>
      <Setting />
      <Box className={"TicTacToe"}>
        <Box className={"container"}>
          <h1 className={"title"}>Tic Tac Toe</h1>

          <Grid container spacing={3} sx={{ width: "300px" }}>
            {arr.map((item, index) => {
              return (
                <Grid item key={index} xs={4} sx={{ textAlign: "center" }}>
                  <Button
                    disabled={end}
                    className={"button"}
                    onClick={() => clickBtn(item)}
                    sx={{
                      color: item.value === "X" ? "white" : "yellow",
                      background: item.isWin === true ? "blue" : "transparent",
                    }}
                  >
                    {item.value}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Button className={"restarts"} onClick={restart}>
            Restart
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Index;
