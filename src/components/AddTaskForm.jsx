import { useState } from "react";

const AddTaskForm =({onAdd}) => {
    const [text, setText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Añadir nueva tarea" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Añadir</button>
        </form>
    );
};
export default AddTaskForm;