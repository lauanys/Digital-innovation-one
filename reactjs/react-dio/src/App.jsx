/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Button from "./Button.jsx";
import "./App.css";

function App() {
    const introducao = "introdução ao Reactjs";

    return (
        <>
            <h1>hello word!</h1>
            <p>{introducao}</p>
            <Button/>
        </>
    );
}

export default App;
