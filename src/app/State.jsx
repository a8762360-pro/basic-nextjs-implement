import React, { useState } from 'react';

const State = () => {
    const [ value, setValue ] = useState("hello");
    const add = () => {
        setValue("hellow world");
    }

    return (
        <div>
            <p>{value}</p>
            <button onClick={add}>add value</button>
        </div>
    );
};

export default State;