import React, { useState, useRef } from 'react';

function TodoNode({ node, userColor, deleteNode, changeNodeStatus, renameNode }) {
  const [nodeTitle, setNodeTitle] = useState(node.titulo);
  const inputRef = useRef(null);

  const handleRename = (event) => {
    let newNodeTitle = event.target.value;
    setNodeTitle(newNodeTitle);
    renameNode({ newNodeTitle: newNodeTitle, nodeId: node.id })
  };

  const edit_node_title = () => {
    inputRef.current.select();
  };
  return (
    <div className="node" style={{ backgroundColor: userColor }}>
      <div className="node_preview">
        <div className="node_header">
          <img className="owner_img" src={node.owner_img} />
          <span className="owner_name">{node.owner}</span>
          <span
            className="status"
            onClick={() => changeNodeStatus({ nodeId: node.id })}
          >
            <span className="material-symbols-outlined status_icon">
              {node.nodeStatus === 0 ? 'schedule' : 'done'}
            </span>
            {node.nodeStatus === 0 ? 'In progress' : 'Completed'}
          </span>
        </div>
        <div className="title_form">
          <div className="node_input_delete">
            <input
              type="text"
              spellCheck="false"
              className="title node_input"
              onChange={handleRename}
              value={nodeTitle}
              ref={inputRef}
            />
            <span
              className="material-symbols-outlined delete_icon"
              onClick={() => deleteNode({ nodeId: node.id })}
            >
              close
            </span>
          </div>

          <span className="title node_title">{nodeTitle}</span>
          <span
            className="material-symbols-outlined edit_icon"
            onClick={edit_node_title}
          >
            edit
          </span>
        </div>
      </div>
    </div>
  );
}

export default TodoNode;
