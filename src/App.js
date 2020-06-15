import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ListItem from './ListItem.js';
import LimpaList from './components/LimpaList';
import { library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
//import firebase from './components/firebase';
import moment from 'moment';

library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        items: [],
        currentItem:{
          text:'',
          key:'', 
        }
      }
      this.handleInput = this.handleInput.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    handleInput(e){
      this.setState({
        currentItem:{ 
          text: e.target.value,
          key:Date.now()
        }
      })
    }
    handleFormSubmit = () => {
      const { tarefas } = this.state;
      localStorage.setItem('tarefas', tarefas);
    };
    componentDidMount() {
      const tarefas =localStorage.getItem('tarefas');
      this.setState({tarefas});
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;  
      if(newItem.text!==""){
        const newItems = [...this.state.items, newItem];
        this.setState({
          items:newItems,
          currentItem:{
            text: '',
            key: ''
          }
        })
      }
    }
    setUpdate(text, key){
      const items = this.state.items;
      items.map((item) =>{
        if(item.key===key){
          item.text=text;  
        }
      })
      this.setState({
        items: items
      })
    }
    deleteItem(key){
      const filteredItems = this.state.items.filter(item => item.key !== key);
      this.setState({
        items: filteredItems
      })
    }
    limpaList  = () => {
      this.setState({
        items: []
      })
    }
    handleDelete = (key) => {
      const filteredItems = this.state.items.filter(item => item.key !== key)
      this.setState({
        items: filteredItems
      })
    }
  render(){ 
    return( 
      <div className="corpo">
        <header>
          <div className="perfil"></div>
          <form className="todoForm" onSubmit={this.addItem}>
            <input type="text" name="tarefas" placeholder="To do..."  value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit">Adicionar</button>
          </form>
        </header>
        <p className="tarefa">Liste aqui as suas tarefas diárias</p>
        <p className="data">{moment(Date()).calendar('dd/mm/yy')}</p>
        <ListItem items = {this.state.items} 
        deleteItem={this.deleteItem} 
        setUpdate={this.setUpdate}></ListItem>
        <LimpaList></LimpaList>
      </div>
     );
  }
}

export default App;

