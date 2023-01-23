import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);
    const [listTitle, setListTitle] = useState("Hello World!");

    console.log("APP RUNNING");

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle((previousAllowToggle) => !previousAllowToggle);
    };

    const changeTitleHandler = () => {
        setListTitle("Hello React!");
    };

    const listItems = useMemo(() => [8, 2, 5, 4, 1], []);

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <Button onClick={allowToggleHandler}>
                {allowToggle ? "Remove" : "Allow"} Toggling
            </Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
            <Button onClick={changeTitleHandler}>Change title!</Button>
            <DemoOutput show={showParagraph} />
            <DemoList title={listTitle} items={listItems} />
        </div>
    );
}

export default App;
