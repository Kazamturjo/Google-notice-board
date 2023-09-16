import React from 'react';
import { AiFillDelete } from "react-icons/ai";


function Node({title,content,onDelete,id}) {
    return (
        <div className='note'>
        <h1> {title}</h1>
        <p>{content}</p>
        <button onClick={()=>onDelete(id)}><AiFillDelete/></button>
        
            
        </div>
    );
}

export default Node;