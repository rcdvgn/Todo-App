import { useState, useEffect } from 'react';
import './styling/App.css';
import { users } from './users.jsx';
import { setUserColor } from './utils.js';
import { UserProfilePic, UserProfilePicHidden, } from './components/UserProfilePic.jsx';
import ChooseUser from './components/ChooseUser.jsx';
import AllNodes from './components/AllNodes.jsx';
import AddNode from './components/AddNode.jsx';

export default function App() {
  const [currentUser, setCurrentUser] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [filterStatus, setFilterStatus] = useState(2);

  useEffect(() => {
    document.documentElement.style.setProperty('--userColor', setUserColor(users[currentUser].userColor));
  }, [currentUser]);

  const deleteNode = ({ nodeId }) => {
    setNodes((currentNodes) =>
      currentNodes.filter((node) => node.id !== nodeId)
    );
  };

  const renameNode = ({ newNodeTitle, nodeId }) => {
    setNodes((currentNodes) => {
      return currentNodes.map((item) => {
        if (item.id === nodeId) {
          return {
            ...item,
            titulo: newNodeTitle,
          };
        }
        return item;
      });
    }); 
  };

  const changeNodeStatus = ({ nodeId }) => {
    setNodes((currentNodes) => {
      return currentNodes.map((item) => {
        if (item.id === nodeId) {
          return {
            ...item,
            nodeStatus: item.nodeStatus === 0 ? 1 : 0,
          };
        }
        return item;
      });
    });  
  };

  function addNode(newNode) {
    setNodes((currentNodes) => {
      return [...currentNodes, newNode];
    });
  }

  function changeFilterStatus(newFilterStatus) {
    setFilterStatus(newFilterStatus);
  }

  return (
    <div
      className="container"
      style={{ backgroundColor: setUserColor(users[currentUser].userColor) }}
    >
      <div className="banner">
        <span className="msg">
          <div>Good morning,</div>
          <div>{users[currentUser].username.split(' ')[0]}</div>
        </span>
      </div>
      <div className="header">
        <UserProfilePic users={users} currentUser={currentUser} />
        <ChooseUser currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} />
        <UserProfilePicHidden users={users} currentUser={currentUser} />
      </div>

      <div className="content">
        <div className="headerBackground"></div>
        <div className="controlBackground">
          <AddNode addNode={addNode} currentUser={currentUser} users={users} />
          <div className="filterWrapper">
            <span
              className={`filter ${filterStatus === 2 ? 'fSelected' : ''}`}
              onClick={() => changeFilterStatus(2)}
            >
              ALL
            </span>
            <span
              className={`filter ${filterStatus === 0 ? 'fSelected' : ''}`}
              onClick={() => changeFilterStatus(0)}
            >
              IN PROGRESS
            </span>
            <span
              className={`filter ${filterStatus === 1 ? 'fSelected' : ''}`}
              onClick={() => changeFilterStatus(1)}
            >
              COMPLETED
            </span>
          </div>
        </div>

        <AllNodes
          nodes={nodes}
          filterStatus={filterStatus}
          deleteNode={deleteNode}
          changeNodeStatus={changeNodeStatus}
          renameNode={renameNode}
        />
      </div>
    </div>
  );
}
