import { useEffect, useState } from "react"
import "./temp.css"
const Temperature = () => {
    const [increment,setIncrement] = useState(10)
    const [tempColor,setTempColor] = useState("cold")
    function handleInc(){
        const newTempColor = increment+1
        setIncrement(newTempColor)
        if(newTempColor>=15){
            setTempColor("hot");
        }
    }
    function handleDec(){
        const newTempColor = increment-1
        setIncrement(newTempColor)
       if(newTempColor<15){
        setTempColor("cold");
       }
    }
    useEffect(()=>{
        const temperature = document.querySelector(".temperature-display")
        if (tempColor==="hot") {
            temperature.style.color="red"
        }else{
            temperature.style.color="blue"
        }
    },[tempColor])
    
    return (
        <>
            <div className="card" >
			<div className={`temperature-display-container ${tempColor ==="hot"?"hot":"cold"}`}>
				<div  className='temperature-display'>
                    {increment}°C
                </div>
			</div>
			<div className='button-container'>
				<button id="btn" onClick={handleInc}>+</button>
				<button id="btn" onClick={handleDec}>-</button>
			</div>
		</div>
        </>
    )
}

export default Temperature