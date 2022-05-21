import React, { useState } from "react";
import { useRef } from "react";
import "./Todo.css";
import { Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Setting from "../../components/Setting";

const Index = () => {
  const inputRef = useRef("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var todo = inputRef.current.value;

    const obj = { id: data.length, title: todo, isCheck: false };
    setData([...data, obj]);
    inputRef.current.value = "";
  };

  const check = function (id) {
    data.map((item, index) => {
      if (item.id === id) {
        item.isCheck = !item.isCheck;
        data.splice(index, 1);

        item.isCheck ? setData([...data, item]) : setData([item, ...data]);
      }
      return data;
    });
  };

  return (
    <>
      <Setting />
      <Box className={"todo"}>
        <Box sx={{ maxWidth: 315, mt: "50px" }}>
          <h1>
            My <br /> To-Do
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className={"TodoInput"}
              ref={inputRef}
              placeholder="Add To Do"
            />
          </form>
          <ul>
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  style={{
                    border: `2px solid ${item.isCheck ? "red" : "black"}`,
                    color: `${item.isCheck ? "red" : "black"}`,
                    textDecoration: `${item.isCheck ? "line-through" : ""}`,
                  }}
                >
                  <span>{item.title}</span>
                  <span
                    onClick={() => check(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {!item.isCheck ? (
                      <CircleOutlinedIcon />
                    ) : (
                      <CheckRoundedIcon />
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Index;
