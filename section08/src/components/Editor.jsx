import './Editor.css'
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onSubmit = () => {
        if(content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className = "Editor">
            <input 
                ref = {contentRef}
                placeholder="새로운 Todo..." 
                value = {content} 
                onChange = {onChangeContent}
                onKeyDown = {onKeyDown}
            />
            <button onClick = {onSubmit}>추가</button>
        </div>
    );
}

export default Editor;