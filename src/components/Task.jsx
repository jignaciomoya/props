const Task =({task, onToggle, onDelete}) =>{
    const handleClick = () => {
        onToggle(task.id);
    };
    return (
        <div style={{marginBottom: '2rem'}}>
            <span style={{textDecoration: task.completed ? 'line-through' : 'none'}} onClick={handleClick}>
            {task.text}
            </span>
            <button style={{marginLeft: '1rem'}} onClick={() => onDelete(task.id)}>Eliminar</button>
        </div>
    );
};

export default Task;