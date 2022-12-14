import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';


const Content = ({items, handleCheck, handleDelete}) => {
    

      return (
    <main>
        { items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}> 
                        <input type="checkbox"
                        onChange={()=>handleCheck(item.id)}
                        checked={item.checked}
                        />
                        <label
                            style={(item.checked)? {textDecoration:'line-through'}:null}
                            onDoubleClick={()=>handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt 
                            onClick={() => handleDelete(item.id)}
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
          ) : (
                <p> No item </p>
          )
        }
    </main>
  )
}

export default Content