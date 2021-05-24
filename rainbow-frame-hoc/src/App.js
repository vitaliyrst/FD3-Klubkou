import React from "react";
import "./App.css";
import withRainbowFrame from "./components/withRainbowFrame";
import DoubleButton from "./components/DoubleButton/DoubleButton";

function App() {
    const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    const FramedFragment = withRainbowFrame(colors)(DoubleButton);
    const handlePress = (index) => alert(index);

    return (
        <>
            <DoubleButton caption1='Однажды' caption2='пору' onPress={handlePress}>
                в студеную зимнюю
            </DoubleButton>
            <FramedFragment caption1='Я из лесу' caption2='мороз' onPress={handlePress} >
                , был сильный мороз
            </FramedFragment>
        </>
    );
}

export default App;