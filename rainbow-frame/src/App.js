import React from "react";
import "./App.css";
import RainbowFrame from "./components/RainbowFrame/RainbowFrame";

function App() {
    const colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    return (
            <RainbowFrame colors={colors}>
                <p>Hello</p>
            </RainbowFrame>
    );
}

export default App;