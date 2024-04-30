import {  forwardRef, useRef} from "react";

const MyInput = forwardRef((props, ref)=>{
    return <input {...props} ref={ref}/>
})

export default OwnComponentRef=()=>{
const inputRef = useRef(null);

function  handleClick() {
    inputRef.current.focus();
    
}
return (
    <>
<MyInput ref={inputRef}/>
    <button onClick={handleClick}> 
    focus input
        </button>
    </>
)
}

