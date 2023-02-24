import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Icon from "@mui/material/Icon";

export const Todo = () => {
  const [input, setInput] = useState(""); //use hook for keeping track of state
  const [todos, setTodos] = useState([]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addToDo = () => {
    //use the setTodos method to create new array instead of mutating the data, so that the page knows to rerender
    setTodos([...todos, { title: input, isComplete: false }]); //create a new array with everything in the old array with the new data
    setInput("");
  };

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.filter((x) => !(x.title === todo.title));
    setTodos(updatedTodo);
  };

  return (
    <div id="body">
      <box>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            color: "blueviolet",
            textAlign: "center",
          }}
        >
          Todo:
          <br></br>
          <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
            marginLeft={80}
            marginRight={80}
          >
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              defaultValue="Normal"
              placeholder="Add a task here..."
              onInput={onInput}
              value={input}
            />
          </Stack>
          <Icon onClick={addToDo} color="primary" align="center">
            +
          </Icon>
        </Typography>

        <br></br>
        <br></br>

        <Table
          aria-label="simple table"
          className="todoBox"
          sx={{
            minWidth: 650,
            margin: "auto",
            width: "50%",
            backgroundColor: "#f3c9ff",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Complete</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {todo.title}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <input
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleChecked(todo)}
                  />
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton onClick={() => deleteTodo(todo)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </box>
    </div>
  );
};
