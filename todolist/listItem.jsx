import React,{useState} from 'react'

const Todo = () => {

  const [arr, setArr] = useState([]);
  const [text, setText] = useState();
  const [newText, setNewText] = useState();

  function submit(e){
    e.preventDefault();
    setArr([...arr, {write:text, id:Date.now(), Editing : false}])
    setText("");
  }

 function edit(recognize){
  
   setArr(arr.map(one => one.id === Number(recognize) ? {...one, Editing:true} : one))
  //  setArr(arr.map(one => one.id === recognize ? console.log("good") : console.log("nice")))
  // arr.map(one => one.id === recognize ? setMode(true): setMode(false))
}
function save(win){
  setArr(arr.map(one => one.id === Number(win) ? {...one, write:newText, Editing:false} : one))
}

function finish(dlt){
  const newArr = arr.filter(dltOne => dltOne.id !== dlt)
  setArr(newArr);
  console.log("Your item has been deleted")
}


  return (
    <div className='flex flex-col justify-center items-center my-8 gap-6'>
      <h1 className='text-2xl font-bold'>Todo List</h1>
      <div className='flex gap-1'>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}className='p-2 w-70 border border-black rounded-md outline-none'></input>
        <button type="button" className='p-2 bg-red-500 text-white rounded-md' onClick={submit}>Add</button>
      </div>
      <div className='flex gap-2 flex-col'>

        {
          arr.map((item)=>{
            return(
              <>
              {

              item.Editing ? (
              
             
              <div className='flex w-100'>
              <input className='p-2 w-[70%] border border-black' value={newText} onChange={(e)=>setNewText(e.target.value)}></input>
              <button type="button" className='p-2 bg-pink-500 w-[15%]' onClick={()=>save(item.id)}>Save</button>
              <button type="button" className='p-2 bg-yellow-500 w-[15%]'>Delete</button>
             </div>
          
             
            ):(
              
              <div className='flex w-100'>
              <p className='p-2 bg-black text-white w-[70%]'>{item.write}</p>
              <button type="button" className='p-2 bg-pink-500 w-[15%]' onClick={()=>edit(item.id)}>Edit</button>
              <button type="button" className='p-2 bg-yellow-500 w-[15%]' onClick={()=>finish(item.id)}>Delete</button>
              </div>
             
            )
          }
              
              </>  
              
            )
          })
        }
      </div>
    </div>
  )
}

export default Todo
