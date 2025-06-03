import React, {useState} from 'react'

const List = () => {

  const [arr, setArr] = useState([])
  const [mode, setMode] = useState(false);
  const [text, setText] = useState('')
  const [newText, setNewText] = useState('')

  function Add(){
    setArr([...arr, {write:text, id:Date.now(), Editing:false}])
    setText('');
  }

  function edit(wow){
    setArr(arr.map(one => one.id === wow ? {...one, Editing:true}:one))
  }

  function save(now){
    setArr(arr.map(two => two.id === now ? {...two, Editing:false, write:newText}:two))
  }

  return (
    <div>
       <div>
         <h1 className='text-2xl font-bold text-center mb-2'>Todo List</h1>
         <div className='flex gap-1 justify-center items-center mb-2'>
          <input type="text"  className='w-60 border border-black p-2' value={text} onChange={(e)=>setText(e.target.value)}></input>
          <button type="button" className="p-2 bg-red-500 text-white" onClick={Add}>Add</button>
          <p>This is my  project</p>
         </div>

         <div className='my-8'>


       {
         arr.map((item)=>{
          return(
             
            <>
         
          {item.Editing ?

            (<div className='flex justify-center items-center mb-2'>
            <input type="text" className='w-60 border border-black p-2' value={newText} onChange={(e)=>setNewText(e.target.value)}></input>
            <button className='bg-pink-500 p-2 ' onClick={()=>save(item.id)} >Save</button>
            <button className='bg-blue-500 p-2 '>Delete</button>
            </div>)
            :

            (<div className='flex justify-center items-center mb-2'>
             <p className='w-60 bg-black text-white p-2'>{item.write}</p>
            <button className='bg-pink-500 p-2 ' onClick={()=>edit(item.id)}>Edit</button>
            <button className='bg-blue-500 p-2 '>Delete</button>
            </div>)
         }
         
         </>

          )
         })
         
         
       }
         
         </div>
       </div>
    </div>
  )
}

export default List
