import React, { Component } from 'react';

class List extends Component {
  renderLocations(locations) {
    let ret = "";
    for (let i = 0; i < locations.length - 1; i++) {
      ret += locations[i] + ", "
    }
    return ret + locations[locations.length-1];
  }

  handleClick = (event, item) => {
    event.target.style.backgroundColor = "#66cc91";
    event.target.style.color = "white";
    this.props.add(item);
  }

  renderList() {
    const items = this.props.items.map(item => {
      return(
	<li key={item.name} className="food"><br/>
	<div className="itemName"> 
	{item.name}​
	</div>
	<div className="itemDetails"><br/>
	<img src={item.img} alt={item.name}/> <br/><br/>
	<div className="textDetails left">
	Found At: <br/>
	Boroughs: <br/>
	Taste: <br/>
	Price:
	</div>
	<div className="textDetails right">
	{item.restaurant} <br/>
	{this.renderLocations(item.locations)}<br/>
	{item.taste}<br/>
	{"$"+item.price}
	</div>
	<div className="addButton" onClick={(event) => this.handleClick(event, {item})}>
	+
	</div>
	</div>
	</li>
      );
    }); 

    if (items.length === 0) {
       return (<p id="notFoundMessage">Sorry, there are no items that match your search and filters.</p>);
    }
    return items;
  }

  render() {
    return(
      <ul> {this.renderList()} </ul>
    );
  }
}

export default List;