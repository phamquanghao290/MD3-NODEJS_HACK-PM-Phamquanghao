import React from 'react'
import axios from 'axios'
import publicAxios from '../config/publicAxios'
import privateAxios from '../config/privateAxios'

function List() {
    const [todo, setTodo] = React.useState({nameTodo: ''})
    const [allTodo, setAllTodo] = React.useState([])
    const handleAddTodo = async() => {
        if(!todo.id){
            try{
                const response = await privateAxios.post('/todos', todo)
                alert(response.data.message)
                listTodo()
                setTodo({nameTodo: ''})
            } catch(error) {alert(error.response.data.message)}
        }else{
            try{
                const response = await privateAxios.put(`/todos/${todo.id}`, todo)
                listTodo()
                setTodo({nameTodo: ''})
            }catch{alert(error.response.data.message)}
        }
    }
    
    React.useEffect(() => {listTodo()},[])

    const listTodo = async() => {
        try{
            const response = await publicAxios.get('/todos')
            setAllTodo(response.data)
        }catch(error){console.log(error)}
    }
    
    const handleDelete = async(idTodo) => {
        let confirm = window.confirm("Bạn có muốn xóa không")
        if(confirm){
            const res = await privateAxios.delete(`/todos/${idTodo}`)
            setAllTodo(res.data)
            alert(res.data.message)
        }
    }
    
    const handleEdit = async(item) => {setTodo({...todo, nameTodo: item.nameTodo})}
        
  return (
    <div>
        <div className="bg-blue-200 w-full h-[750px]">
            <br />
            <br />
            <div className="border-solid border-2 border-indigo-600 m-auto bg-orange-300 w-1/3 mt-11 rounded-lg">
                <br />
                <h1 className="text-3xl font-bold text-center">Todo List</h1>
                <br />
                <input
                    type="text"
                    className="border-solid border-2 border-indigo-600 ml-9 rounded-l-lg w-3/4 h-10 pl-4"
                    placeholder="Todo"
                    name="nameTodo"
                    onChange={(e) => setTodo({...todo, nameTodo: e.target.value})}
                    value={todo.nameTodo}
                />
                <button className="border-2 h-10 rounded-r-lg pl-4 pr-4" onClick={handleAddTodo}>{todo.idTodo ? "Save" : "Add"}</button>
                <div className="mb-11">
                    {allTodo.map((item, index) => (
                        <div key={index} className="flex">
                            <p className="border-solid border-2 bg-white rounded-l-lg ml-9 w-3/6 h-10 pl-4 pt-2 mt-5">
                                {item.nameTodo}
                            </p>
                            <button onClick={() => handleEdit(item)} className="border-2 pl-4 pr-4 mt-5" >Sửa</button>
                            <button onClick={() => handleDelete(item.idTodo)} className="border-2 pl-4 pr-4 rounded-r-lg mt-5">Xóa</button>     
                        </div>
                    ))}
                </div>
                <br />
                <div className="flex justify-around align-center">
                    <h2 className="text-center mb-9 font-bold text-lg">
                        You have {allTodo.length} todos
                    </h2>
                    <button
                        className="block bg-red-500 w-[100px] h-[40px] rounded-lg"
                    >
                        Delete all
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List