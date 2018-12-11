import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

const food = [
    {name: "The Harvest", restaurant: "Spot Dessert Bar", locations: ["Queens", "Manhattan"], taste: "Sweet", img: "https://s3-media1.fl.yelpcdn.com/bphoto/p-2RVFYJbcdtjvBnvp64Mg/o.jpg", price: "10.95"},
    {name: "Big Orange", restaurant: "Spot Dessert Bar", locations: ["Queens", "Manhattan"], taste: "Sweet", img: "https://s3-media1.fl.yelpcdn.com/bphoto/37aApww_ibzcotDcEiUXnA/o.jpg", price: "10.95"},
    {name: "Rolled Ice Cream", restaurant: "10Below", locations: ["Queens", "Manhattan"], taste: "Sweet", img: "https://s3-media3.fl.yelpcdn.com/bphoto/jN3q6fsMsIDL82exHxOVTg/o.jpg", price: "7.00"},
    {name: "Chick'nCone", restaurant: "Chick'nCone", locations: ["Manhattan"], taste: "Salty", img: "https://i.pinimg.com/originals/ed/e6/fc/ede6fce19825e723926da2952dc1410c.jpg", price: "10.00"},
    {name: "Waffle Cone Ice Cream", restaurant: "Eggloo", locations: ["Manhattan"], taste: "Sweet", img: "https://i.pinimg.com/736x/e7/2f/c1/e72fc15fac848b17ac9d19fc1c324d62--waffle-bar-photo-food.jpg", price: "8.00"},
    {name: "Chocolate Mousse Cake", restaurant: "Dominique Ansel Bakery", locations: ["Manhattan"], taste: "Sweet", img: "https://i0.wp.com/dominiqueanselny.com/wp-content/uploads/2017/11/Large-Reindeer-Chocolate-Caramel-Cake-e1543938279751.jpg?resize=1365%2C1365&ssl=1", price: "7.75"},
    {name: "CreamArt", restaurant: "Sweet Moment NYC", locations: ["Manhattan"], taste: "Sweet", img: "https://s3-media3.fl.yelpcdn.com/bphoto/YiqpHEfGJ72BXZyniwwYlQ/348s.jpg", price: "5.00"},
    {name: "Bingsoo", restaurant: "Sweet Moment NYC", locations: ["Manhattan"], taste: "Sweet", img: "http://best-looks.com/wp-content/uploads/2018/09/8.jpg", price: "19.00"},
    {name: "Pizza Box Pizza", restaurant: "Vinnie's Pizzeria", locations: ["Brooklyn"], taste: "Salty", img: "https://pbs.twimg.com/media/ChFJm3wWYAA5l8W.jpg", price: "45.00"},
    {name: "Chicken Banana Blossom Salad", restaurant: "Uncle Boons", locations: ["Manhattan"], taste: "Spicy", img: "https://static1.squarespace.com/static/52b9be06e4b013dbd6fb5f3e/543700dbe4b03e4b065b2d41/54370aaae4b0f25618605a8b/1413145355954/UncleBoons_ESP4468.jpg?format=500w", price: "15.00"},
    {name: "Omu Yakisoba", restaurant: "Fukurou", locations: ["Manhattan"], taste: "Salty", img: "https://cdn.vox-cdn.com/thumbor/qcXdqFV-LjloU3DtwcA2nFCmhbc=/0x0:1000x664/1200x900/filters:focal(420x252:580x412):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62582777/01_omu_yakisoba.0.0.jpg", price: "11.99"},
    {name: "Avocado Tofu", restaurant: "Fukurou", locations: ["Manhattan"], taste: "Umami", img: "http://fukurou.soh.bz/images/menu/appetizer/l/01-avocado-tofu.jpg", price: "8.99"},];

class App extends Component {
  render() {
    return (
      <div className="App">
	    ​<FilteredList items={food} />
      </div>
    );
  }
}

export default App;
