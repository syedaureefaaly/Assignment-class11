"use client"
import { useState } from "react";
function State(){
const [count , setCount] = useState(0)
const handleIncrement = ()=> {
      setCount(count + 1) 
console.log("Increase value" , count + 1)
}
const handleDecrement = ()=> {
    setCount(count - 1)
    console.log("Decrese value" , count - 1)
}  
    return (
        <div className="flex justify-center items-center">
            <button className="bg-green-300 text-black p-30px m-56 rounded-md p-4"  onClick={handleIncrement} >Increment</button>
            <h1 className="text-4xl justify-between">{count}</h1>
            <button className="bg-red-300 text-black p-30px m-56 rounded-md p-4" onClick={handleDecrement} >Decrement</button>
        </div>
    )
}
export default State;