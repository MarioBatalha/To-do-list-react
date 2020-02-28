import React from 'react';
import './App.css';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 //Função callback para render input itens
function ListItem (props) {
    const items = props.items;
    const {LimpaList, handleDelete} = this.props;
 
    const listItems = items.map((item) => {
        return <div className="list" key={item.key} handleDelete={() => handleDelete(item.key)}> 
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
                 onClick={ () => props.children.deleteItem(item.key)
                }/>
              </span>
            </p>
        </div>
    })
    return (
       <div>{listItems}</div>
    )
}
export default ListItem;
