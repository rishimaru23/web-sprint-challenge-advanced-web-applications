import React, { useState } from "react";
import axios from "axios";
import EditMenu from './EditMenu';

import Color from './Color';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [editedColor, setEditedColor] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
    setEditedColor(color)
  };

  const saveEdit = e => {
    e.preventDefault();
    updateColors(colors.map(color => color === editedColor ? colorToEdit: color));
    setEditing(false)
  };

  const deleteColor = color => {
    updateColors(colors.filter(item => item !== color))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.