import React from 'react';
import { useRef } from 'react';
import Child from './Components/child';

function Parent() {
    const inputRef = useRef(null);

    const scroll = () => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            inputRef.current.classList.add("highlight");

            setTimeout(() => {
                inputRef.current.classList.remove("highlight");
            }, 1000);
        }
    };
    return (
        <>
            <div>
                <button onClick={scroll}>Click to Scroll</button>
                <div style={{ height: "150vh" }}></div>
                <Child ref={inputRef} />
            </div>
        </>
    )
}

export default Parent
