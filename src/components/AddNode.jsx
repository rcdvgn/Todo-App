import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setUserColor, setBorderColor } from '../utils.js';

function AddNode({ addNode, currentUser, users }) {
    const [newTitle, setNewTitle] = useState('');

    const handleNewTitle = (event) => {
        setNewTitle(event.target.value);
    };

    const handleAddNode = () => {
        if (newTitle.trim().length > 0) {
            addNode({
                id: 1,
                titulo: newTitle,
                owner: users[currentUser].username,
                userColor: users[currentUser].userColor,
                owner_img: users[currentUser].profilePic,
                nodeStatus: 0,
                id: uuidv4(),
            });
            setNewTitle('');
        }
    };

    const handleEnterTitle = (event) => {
        if (event.key === 'Enter') {
            handleAddNode();
        }
    };

    return (
        <div className="add_node">
        <input
            className="add_node_input"
            spellCheck="false"
            placeholder="Add a to-do item"
            value={newTitle}
            onChange={handleNewTitle}
            onKeyDown={handleEnterTitle}
        />
        <span
            className="material-symbols-outlined add_icon"
            onClick={handleAddNode}
            style={{
                backgroundColor: setUserColor(users[currentUser].userColor),
                boxShadow: `0px 3px 0px 0px ${setBorderColor(users[currentUser].userColor)}`,
            }}
        >
            add
        </span>
        </div>
    );
}

export default AddNode;