import React from 'react';
import TodoNode from './TodoNode.jsx';
import { setUserColor } from '../utils.js';

function AllNodes({ nodes, filterStatus, deleteNode, changeNodeStatus, renameNode }) {
  return (
    <div className="nodes">
      {nodes
        .slice(0)
        .reverse()
        .map(
          (item) =>
            (item.nodeStatus === filterStatus || filterStatus === 2) && (
              <TodoNode
                key={item.id}
                node={item}
                userColor={setUserColor(item.userColor)}
                deleteNode={deleteNode}
                changeNodeStatus={changeNodeStatus}
                renameNode={renameNode}
                // deleteNode={deleteNode}
              />
            )
        )}
    </div>
  );
}

export default AllNodes;
