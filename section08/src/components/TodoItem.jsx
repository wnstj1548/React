import './TodoItem.css'

const TodoItem = ({id, isDone, date, content, onUpdate, onDelete}) => {

    const onChangeCheckBox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
    <div className = "TodoItem">
        <input onChange = {onChangeCheckBox} checked = {isDone} type="checkbox"/>
        <div className = "content">{content}</div>
        <div className = "date">{new Date(date).toLocaleDateString()}</div>
        <button onClick = {onClickDeleteButton}>삭제</button>
    </div>
    );
}

export default TodoItem;