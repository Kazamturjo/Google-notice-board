import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";


export default function CreateArea({SubmitButton, onAdd}) {
  const [isExpanded,setExpended] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleExpended(){
    setExpended(true)
  }
  function submitButton(event) {
    onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitButton}>
      {isExpanded &&(

        <input
        required
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
      )}
        <p>
          <textarea
          required
            value={note.content}
            onClick={handleExpended}
            name="content"
            placeholder="Take a note"
            onChange={handleChange}
          ></textarea>
        </p>
        <button > <IoIosAddCircleOutline size={35}/></button>
      </form>
    </div>
  );
}
