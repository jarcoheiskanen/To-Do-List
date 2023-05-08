/* eslint-disable no-unused-vars */

// -- Imports

import React, { useState } from 'react';
import PageStyle from '../style/mainPage.css'

// -- Function

const Page = () => {

    function addItem(element) {

        const inputTitle = document.getElementById("inputTitle");
        const inputDesc = document.getElementById("inputDesc");

        const itemHolder = document.createElement("div")
        const listedItem = document.createElement("div");
        const listedTitle = document.createElement("textarea");
        const listedDesc = document.createElement("textarea");
        const listedCheck = document.createElement("input");

        const checkButton = document.createElement("button");
        const removeButton = document.createElement("button");

        let isDone = false;

        listedTitle.maxLength = "20";
        listedDesc.maxLength = "50";

        listedTitle.placeholder = inputTitle.value.replace(" ", "");
        listedDesc.placeholder = inputDesc.value;

        listedTitle.className = "listedBox listedInfo";
        listedDesc.className = "listedBox listedInfo";
        listedItem.className = "listedBoxHolder";
        itemHolder.className = "listHolderHolder";
        checkButton.className = "checkButton";
        removeButton.className = "removeButton";

        checkButton.innerHTML = "MARK AS DONE";
        removeButton.innerHTML = "REMOVE";

        listedTitle.style = "font-size: 2em !important; font-weight: bold;";
        listedTitle.rows = "1";
        listedDesc.rows = "1";

        listedItem.appendChild(listedTitle);
        listedItem.appendChild(listedDesc);
        listedItem.appendChild(checkButton);
        listedItem.appendChild(removeButton);
        itemHolder.appendChild(listedItem);

        document.getElementById("list").appendChild(itemHolder);

        // -- // Functions

        checkButton.onclick = function() {
            isDone = !isDone
            console.log(isDone)
            listedTitle.style.textDecoration = (isDone && "line-through") || "none";
            listedDesc.style.textDecoration = (isDone && "line-through") || "none";
            listedTitle.style.color = (isDone && "rgb(255, 55, 55)") || "rgb(0, 0, 0)"
            listedDesc.style.color = (isDone && "rgb(255, 55, 55)") || "rgb(0, 0, 0)"
            checkButton.innerHTML = (isDone && "UNMARK") || "MARK AS DONE"
        };

        removeButton.onclick = function() {
            itemHolder.remove();
        };

        element.preventDefault();

    }

    return (
        <div className="background">
            <center>

                <form id="handling" onSubmit={addItem}>
                    <label className="titleText">Add tasks:</label>
                    <textarea id="inputTitle" maxLength="20" className="inputBox" placeholder="Type task here" required></textarea>
                    <textarea id="inputDesc" maxLength="100" className="inputBox" placeholder="Type task description here" required></textarea>
                    <button className="submitButton">Add task</button>
                </form>

                <div id="list" className="list"></div>

            </center>
        </div>
    );
};

export default Page;