import { useState, useEffect } from "react"
import { TodosItem } from "./AddTODO"

function CreateTodo() {
    const [todosList, setTodosList] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDescription] = useState('')
    const hack = null;

    // GETTING FROM LOCAL STORAGE ON FIRST LOAD
    useEffect(() => {
        localStorage.length > 0 &&
            setTodosList(JSON.parse(localStorage.TodosList))
        console.log("Page deployed")
    }, [hack])

    // SETTING TO LOCAL STORAGE AFTER EVERY UPDATE
    useEffect(() => {
        localStorage.setItem('TodosList', JSON.stringify(todosList))
    }, [todosList])

    // ADDING TO MY TODOS LIST
    function addTodo() {
        setTodosList((prev) => {
            return [
                ...prev,
                {
                    title: title,
                    desc: desc
                }
            ]
        })

        setTitle('')
        setDescription('')
    }
    // IMPLEMENTING THE DELETE FUNCTIONALITY
    function deleteTodo(todo) {
        setTodosList(
            todosList.filter(elem => {
                return elem !== todo;
            })
        )
    }
    // RENDERING
    return <div className="container">
        <h1>TODOS LIST</h1>
        <label>Title</label>
        <input type="text" value={title}
            onChange={e => { setTitle(e.target.value) }} />

        <label>Description</label>
        <input type="text" value={desc}
            onChange={e => { setDescription(e.target.value) }} />

        <div className="add-btn-div">
            <button id="add-btn" onClick={addTodo}>Add</button>
        </div>
        <div>
            {/* RENDERING THE TODO ITEMS COMPONENT */}
            {todosList.length > 0
                &&
                <TodosItem deleteTodo={deleteTodo} todosList={todosList} />}
        </div>
    </div>
}

export default CreateTodo