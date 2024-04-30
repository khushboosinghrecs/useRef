import { useRef } from "react";

export default FocusInPut=()=>{
    const inputRef = useRef(null)
const handleFocus=()=>{
inputRef.current.focus();
}
    return (
        <>
        <input ref={inputRef}/>
        <button onClick={handleFocus}>focus Input</button>
</>
    )

}