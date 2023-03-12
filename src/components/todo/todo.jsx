import React, { useState, useContext } from "react";
import { TodoContext } from "../../state/todoState/todoContext";
import { TodoActions } from "../../state/todoState/todoReducer";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Checkbox from "@mui/material/Checkbox";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Icon from "@mui/material/Icon";

export const Todo = () => {
  const [input, setInput] = useState(""); //use hook for keeping track of state
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });

    setInput("");
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
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
          <Icon onClick={addTodo} color="primary" align="center">
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
            {todoState.todos.map((todo, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {todo.title}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Checkbox
                    checked={todo.isComplete}
                    onChange={() => toggleChecked(todo)}
                    inputProps={{ "aria-label": "controlled" }}
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
