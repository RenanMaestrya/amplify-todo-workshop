"use client";

import { useState } from 'react';
import { updateTodo } from '../services/todoService';

const EditTodo = ({ todo }) => {
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleUpdate = async () => {
    const result = await updateTodo(todo.id, { title: editedTodo.name });
    console.log(result);
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <input
        type="text"
        value={editedTodo.name}
        onChange={(e) => setEditedTodo({ ...editedTodo, name: e.target.value })}
      />
      <button onClick={handleUpdate}>Update Todo</button>
    </div>
  );
};

export default EditTodo;