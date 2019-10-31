import React, { Component } from 'react';
import ACTIONS from '../actions/action';
import { connect } from 'react-redux';


class todo extends Component {
  state={};

  generate = () => {
    return this.props.items.map(item => (
      <ul key={item.id}>
        <li>{item.description} <button onClick={this.handleDelete}
            value={item.id}> Delete {item.id}</button>
            </li>
      </ul>
    ));
  };

  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ item: "" });
    if (this.state.item !== "") {
      // add the task to store
      this.props.createItem(this.state.item);
    }
    event.preventDefault();
  };
  handleDelete = event => {
    //delete the task from the store
    this.props.deleteItem(event.target.value);
    
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  

  render() {
    const { classes } = this.props;

    return (
      <div>
       <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit} id="add-task">
            <input value={this.state.item} name="item" onChange={this.handleChange}></input>
            <button type="submit" form="add-task" value="Submit">Add</button>
            
          </form>
        </div>
        <div>
         <ol>
              <li>{this.generate()}</li>
          </ol>
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todo);

