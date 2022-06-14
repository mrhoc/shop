import React, { useRef,useState } from 'react';

const TodoList = () => {
    const [text, settext] = useState('');
    const [todos,setTodos]=useState([])
    const [saveEdit,setSaveEdit]=useState(null);
    const ipRef=useRef();
    const handleAdd=()=>{
        setTodos([...todos,text]);
        settext('');
        setSaveEdit(null)
        ipRef.current.focus()
    }
    const handleRemove=(i)=>{
        let index=[...todos].findIndex((todo,index)=>index===i);
    
        if(index!==-1){
            let newTodos=[...todos];
            newTodos.splice(index,1);
            setTodos(newTodos)
        }
        else{
            setTodos([...todos])
        }
    }
    const handleEdit=(i)=>{
        let index=[...todos].findIndex((todo,index)=>index===i);
        let newTodos=[...todos];
        setSaveEdit(i);
        settext(newTodos[index])
    }

    const handleSaveEdit=()=>{
        let newTodos=[...todos];
        newTodos[saveEdit]=text;
        setTodos(newTodos)
    }
    


    return (
        <div>
                <input ref={ipRef} value={text} placeholder='add todo' onChange={(e)=>{settext(e.target.value)}}></input><button onClick={handleAdd}>add </button>
                {saveEdit>=0&&saveEdit!==null?<button onClick={handleSaveEdit}>save</button>:''}
                <ul>
                {
                    todos&&todos.map((todo,index)=><li key={index}>{todo} <span onClick={()=>{handleRemove(index)}}>&times;</span><span onClick={()=>{handleEdit(index)}}>edit</span></li>)
                }
                </ul>
        </div>
    );
}

export default TodoList;
