import { useRef } from "react";

export default function Counter() {

    let ref= useRef(0);

    function handleClick() {
        ref.current= ref.current+1;
        alert('you clicked' + ref.current + 'times', ref)
    }

    return (
        <button onClick={handleClick}>
            click me
            {ref.current}
            </button>
    )
    
}