import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import IdeaBox from './IdeaBox';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      search: "",
      taste: "All Tastes",
      location: "All Boroughs",
      sortBy: "Default",
      ideas: []
    };
  }
  
  // Sets the state to user's search
  onSearch = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  }

  containsLocation(restaurantLocations, requestedLocation) {
    if (requestedLocation === "All Boroughs") {
      return true;
    }
    for (let i = 0; i < restaurantLocations.length; i++) {
      if (restaurantLocations[i] === requestedLocation) {
        return true;
      }
    }
    return false;
  }
  
  filterItem = (item) => {
    if (this.state.taste !== "All Tastes") {
      return item.taste === this.state.taste &&
      this.containsLocation(item.locations, this.state.location) &&
      item.name.toLowerCase().search(this.state.search) !== -1;
    } else {
      return this.containsLocation(item.locations, this.state.location) &&
      item.name.toLowerCase().search(this.state.search) !== -1;
    }
  }

  changeTaste = (event) => {
    this.setState({taste: event});
  }

  changeLocation = (event) => {
    this.setState({location: event});
  }

  changeSortBy = (event) => {
    this.setState({sortBy: event});
  }

  sortFunc = (a, b) => {
    if (this.state.sortBy === "Lowest Price") {
      return a.price - b.price;
    } else if (this.state.sortBy === "Highest Price") {
      return b.price - a.price;
    } else {
      return 0;
    }
  }

  addFunc = (item) => {
    let temp = this.state.ideas;
    temp.push(item);
    this.setState({ideas: temp});
  }

  resetDropdowns = () => {
    this.setState({
      search: "",
      taste: "All Tastes",
      location: "All Boroughs",
      sortBy: "Default",
      ideas: []
    });
  }

  render() {
    return (
      <div className="filter-list">
	<div id="topPart">
	<h1>NYC Food Finder</h1>
	<input type="text" placeholder="Search (Ex: Orange)" onChange={this.onSearch}/><br/>
	<DropdownButton id="tasteDropdown" title={this.state.taste}>
	  <MenuItem eventKey="All Tastes" onSelect={this.changeTaste}>All Tastes</MenuItem>
	  <MenuItem eventKey="Salty" onSelect={this.changeTaste}>Salty</MenuItem>
	  <MenuItem eventKey="Spicy" onSelect={this.changeTaste}>Spicy</MenuItem>
	  <MenuItem eventKey="Sweet" onSelect={this.changeTaste}>Sweet</MenuItem>
	  <MenuItem eventKey="Umami" onSelect={this.changeTaste}>Umami</MenuItem>
	</DropdownButton>
	<DropdownButton id="boroughDropdown" title={this.state.location}>
	  <MenuItem eventKey="All Boroughs" onSelect={this.changeLocation}>All Boroughs</MenuItem>
	  <MenuItem eventKey="Brooklyn" onSelect={this.changeLocation}>Brooklyn</MenuItem>
	  <MenuItem eventKey="Manhattan" onSelect={this.changeLocation}>Manhattan</MenuItem>
	  <MenuItem eventKey="Queens" onSelect={this.changeLocation}>Queens</MenuItem>
	</DropdownButton>
	<div className="pipe">
	</div>
	<DropdownButton id="sortByDropdown" title={"Sort By " + this.state.sortBy}>
	  <MenuItem eventKey="Default" onSelect={this.changeSortBy}>Default</MenuItem>
	  <MenuItem eventKey="Lowest Price" onSelect={this.changeSortBy}>Lowest Price</MenuItem>
	  <MenuItem eventKey="Highest Price" onSelect={this.changeSortBy}>Highest Price</MenuItem>
	</DropdownButton>
	<div className="pipe"></div>
	<Button id="reset" onClick={this.resetDropdowns} bsStyle="danger">Reset</Button>
	</div>
	<List id="list-part" items={(this.props.items.filter(this.filterItem)).sort(this.sortFunc)} add={this.addFunc}/>
	<IdeaBox id="idea-part" ideas={this.state.ideas}/>
      </div>
   );
 }
}

export default FilteredList;