import React , {Component} from 'react';
import './add.css'
class Add extends Component {
  state={
      name:'',
      age :''
  }
  handleChange=(e)=>{
      this.setState({
        [e.target.id] : e.target.value
      })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name:'',
    age :''})

}
  render(){
    return (
      <div >
          <form onSubmit={this.handleSubmit}>
             <input type="name" className="name" placeholder="enter name..." id="name" onChange={this.handleChange} value={this.state.name}/>
              <input type="number" className="age" placeholder="enter age ..." id="age" onChange={this.handleChange}value={this.state.age} />
              <input type="submit" value="add" className="action"/>

          </form>
      </div>
    );
}
}

export default Add;
