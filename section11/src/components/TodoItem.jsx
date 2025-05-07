import './TodoItem.css'
import { useContext, memo } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, date, content}) => {

    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

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

// export default memo(TodoItem, (prevProps, nextProps) => {
//     return !(prevProps.id !== nextProps.id || 
//         prevProps.isDone !== nextProps.isDone ||
//         prevProps.content !== nextProps.content ||
//         prevProps.date !== nextProps.date);
// });

export default memo(TodoItem);