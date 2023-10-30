import React, { useState } from 'react';

function ChooseUser({ currentUser, setCurrentUser, users }) {
    const [toggleUserChoices, setToggleUserChoices] = useState(false);

    const changeUser = (index) => {
        if (index !== currentUser) {
        setCurrentUser(index);
        showUserChoices();
        }
    };
    function UserChoices() {
        return (
        <>
            {users.map(
            (user, index) =>
                index !== currentUser && (
                <div
                    className="choiceUser"
                    key={index}
                    onClick={() => changeUser(index)}
                >
                    {user.username}
                </div>
                )
            )}
        </>
        );
    }

    const showUserChoices = () => {
        setToggleUserChoices((currentToggleUserChoices) => {
        return !currentToggleUserChoices;
        });
    };

    return (
        <div className="chooseUser">
        <div className="chosenUser choiceUser" onClick={showUserChoices}>
            <span className="chosenUserText">{users[currentUser].username}</span>
            <span className="material-symbols-outlined chooseUserIcon">
            expand_more
            </span>
        </div>
        {toggleUserChoices && <UserChoices />}
        </div>
    );
}

export default ChooseUser;