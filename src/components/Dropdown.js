import React from "react";
import  "../App.scss";

const Dropdown=(object)=>{

    const { setValue,value,startmonth,setStartmonth,endmonth,setEndmonth }=object.object;
  
    const handleChange=(e)=>{
      
      if(e.target.id==="repeat")
      {
          setValue(e.target.value);
      }
      else if(e.target.id==="start"){
          setStartmonth(e.target.value);
      }
      else{
         setEndmonth(e.target.value);
      }

      

    }

    return(
        <>
        <div>
            <label>Repeat on</label>
            <select onChange={handleChange} id="repeat"value={value}>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="Daily">Daily</option>
            </select>
            </div>

            <div>
            <label> Start*</label>
            <select onChange={handleChange}id="start"value={startmonth}>
            <option value="jan 2023">Jan 2023</option>
                <option value="Feb 2023">Feb 2023</option>
                <option value="Mar 2023">Mar 2023</option>
                <option value="Apr 2023">Apr 2023</option>
                <option value="May 2023">May 2023</option>
                <option value="jun 2023">Jun 2023</option>
                <option value="july 2023">July 2023</option>
                <option value="Aug 2023">Aug 2023</option>
                <option value="Sep 2023">Sep 2023</option>
                <option value="Oct 2023">Oct 2023</option>
                <option value="Nov 2023">Nov 2023</option>
                <option value="Dec 2023">Dec 2023</option>
                
            </select>
            

            
            <label> End*</label>
            <select onChange={handleChange}id="end"value={endmonth}>
                <option value="jan 2023">Jan 2023</option>
                <option value="Feb 2023">Feb 2023</option>
                <option value="Mar 2023">Mar 2023</option>
                <option value="Apr 2023">Apr 2023</option>
                <option value="May 2023">May 2023</option>
                <option value="jun 2023">Jun 2023</option>
                <option value="july 2023">July 2023</option>
                <option value="Aug 2023">Aug 2023</option>
                <option value="Sep 2023">Sep 2023</option>
                <option value="Oct 2023">Oct 2023</option>
                <option value="Nov 2023">Nov 2023</option>
                <option value="Dec 2023">Dec 2023</option>
            </select>
            </div>
           


        
        </>
    )
}
export default Dropdown;