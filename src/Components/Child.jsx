import React from 'react'
import './child.css'

import { forwardRef } from "react";

const Child = forwardRef((prop, ref) => {
    return (
        <input
            ref={ref}
            type="text"
            placeholder="Type Here"
            className="custom-input"
        />
    );
});

export default Child;
