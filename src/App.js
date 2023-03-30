import React from 'react'
import { useState } from 'react'

function App() {

  const [inputValue, SetinputValue] = useState() 
  const [mainArray, setmainArray ] =useState([])
 
const [editCheck, setEditCheck] =useState(false)

const [editValue, SeteditValue] = useState("")

function addFunc(){
  if(editCheck){

    mainArray[editValue] = inputValue
    setmainArray(mainArray)
    setEditCheck(false)
  }else{
    setmainArray([...mainArray, inputValue])
  }



  SetinputValue("")
 }

 function deleteFunc(index){
  let tempArray =[...mainArray]
  tempArray.splice(index,1)
setmainArray(tempArray)
 }

 function editFunc(index){ 
SetinputValue(mainArray[index])
SeteditValue (index)
setEditCheck(true)
 }

  return (
    <>
    <div>
      <input onChange={(e)=>{SetinputValue(e.target.value)}} value={inputValue} type="text"/>
      <button onClick={addFunc}>Add</button>
    <div>
      <ul>
        {mainArray.map((item,index)=>{
          return <li key={index}>{item}
          <button onClick={()=>{deleteFunc(index)}}>Delete</button>
          <button onClick={()=>{editFunc(index)}}>Edit</button></li>
        })}
      </ul>
    </div>
    
    </div>

    </>
  )
}

export default App