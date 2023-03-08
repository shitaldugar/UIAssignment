import React from"react";
import  "../App.scss";



const Button=(object)=>{
    const {value,startmonth,endmonth}=object.object;
    const handleChange=(e)=>{
        console.log(value,startmonth,endmonth);
    }
    return(
        <>
        <div>
            <button >Cancel</button>
            <button onClick={handleChange} className="btn">Save</button>
        </div>
        </>
    )
}
export default Button;