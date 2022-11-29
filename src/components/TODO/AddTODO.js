
function TodosItem({ todosList, deleteTodo }) {
    console.log(todosList)//testing

    return todosList.map((todo, idx) => {
        return <div
            className="todo-container"
            key={idx}>

            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button id="del-btn"
            onClick={() => deleteTodo(todo)} >Delete</button>

        </div>
    })
}

export { TodosItem }