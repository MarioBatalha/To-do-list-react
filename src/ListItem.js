import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItem (props) {
    const items = props.items;
    const listItems = items.map((item) => {
        return <div className="list" key={item.key}>
            <p className="item">
              <input type="text" className="editar" id={item.key} value={item.text}
                onChange ={
                    (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                }
              ></input>
              <span>
                <FontAwesomeIcon className="faicon" icon="trash" spin
                 onClick={ () => props.deleteItem(item.key)
                }/>
              </span>
            </p>
        </div>
    })
    return (
       <div>{listItems}</div>
    )
}
function onmouseover(props){
    return <p>Marcar como feito</p>
}
export default ListItem;
