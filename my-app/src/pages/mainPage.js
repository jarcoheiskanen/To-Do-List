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

        listedTitle.placeholder = inputTitle.value;
        listedDesc.placeholder = inputDesc.value;
        listedCheck.type = "checkbox";

        listedTitle.className = "listedBox listedInfo";
        listedDesc.className = "listedBox listedInfo";
        listedCheck.className = "listedCheck";
        listedItem.className = "listedBoxHolder";
        itemHolder.className = "listHolderHolder"

        listedTitle.style = "font-size: 2vw !important; font-weight: bold;";
        listedTitle.rows = "1";
        listedDesc.rows = "1";

        listedItem.appendChild(listedTitle);
        listedItem.appendChild(listedDesc);
        itemHolder.appendChild(listedCheck);
        itemHolder.appendChild(listedItem);

        document.getElementById("list").appendChild(itemHolder);

        listedCheck.onclick = function() {
            const isChecked = listedCheck.checked
            console.log(isChecked)
            listedTitle.style.textDecoration = (isChecked && "line-through") || "none";
            listedDesc.style.textDecoration = (isChecked && "line-through") || "none";
            listedTitle.style.color = (isChecked && "rgb(255, 55, 55)") || "rgb(0, 0, 0)"
            listedDesc.style.color = (isChecked && "rgb(255, 55, 55)") || "rgb(0, 0, 0)"
        };

        element.preventDefault()

    }

    return (
        <div className="background">
            <center>

                <form id="handling" onSubmit={addItem}>
                    <label className="titleText">Add tasks:</label>
                    <textarea  id="inputTitle" maxlength="20" className="inputBox" placeholder="Type task here"></textarea>
                    <textarea id="inputDesc" maxlength="100" className="inputBox" placeholder="Type task description here"></textarea>
                    <button className="submitButton">Add task</button>
                </form>

                <div id="list" className="list"></div>

            </center>
        </div>
    );
};

export default Page;