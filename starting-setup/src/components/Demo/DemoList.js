import React, { useMemo } from "react";

const DemoList = ({ title, items }) => {
    console.log("Demo list RUNNING!");

    const sortedList = useMemo(() => {
        console.log("items sorted");
        return items.sort((a, b) => a - b);
    }, [items]);

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default DemoList;
