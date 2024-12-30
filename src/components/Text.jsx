import React, { useState } from 'react'
import Draggable from 'react-draggable'
const Text = () => {
    const [editMode,setEditMode] = useState(false)
    const [val,setVal] = useState("Double Click to Edit");
    
  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={(e) => setEditMode(false)}
          className="text-2xl text-black font-semibold border-2 border-black"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      ) : (
        <h1
          onDoubleClick={(e) => setEditMode(true)}
          className="text-2xl text-black font-semibold"
        >
          {val}
        </h1>
      )}
    </Draggable>
  );
}

export default Text