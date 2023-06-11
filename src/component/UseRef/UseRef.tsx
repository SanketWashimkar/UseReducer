import { useRef } from "react";

const UseRef = () => {

const inputRef:any = useRef(null);

const handleClick = () => {

  inputRef.current.focus();
};

    return (

        <div>
<input type = "text" ref = {inputRef} />
<button type = "button" onClick={handleClick} > Focus Input </button > 
        </div>
    )
}
export default UseRef;