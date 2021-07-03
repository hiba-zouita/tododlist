import React , {Component} from 'react';
import TodoItem from './componenet/todoitem/listitem';
import Add from './componenet/addItem/add';
class App extends Component {
  state ={
  items :[
    {id : 1, name :'hiba ', age: 21},
    {id : 2, name :'amal ', age: 23},
    {id : 3, name :'zouita ', age: 23}
  ]
}
deleteItem =(id)=>{
  let items=this.state.items;
  let i =items.findIndex(item => item.id === id)
  items.splice(i,1)
  this.setState({items})
}
  addItem =(item)=>{
    item.id=Math.random();
    let items =this.state.items;
    items.push(item);
    this.setState({items})

  }
/*methode 2 
deleteItem =(id)=>{
  let items=this.state.items.filter(item=>{
    return item.id!== id
  });
    this.setState({items})


*/

   render(){
    return (
      <div className="App  container">
        <h1 className="text-center">ToDo List App</h1>
        <TodoItem items ={this.state.items} deleteItem={this.deleteItem}/>
        <Add addItem={this.addItem}/>
      </div>
    );
}
}

export default App;
