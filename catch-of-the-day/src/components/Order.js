import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  }

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

    // make sure the fish is loaded before we continue
    if(!fish) return null;

    if(!isAvailable) {
      return (
        <li key={key}>Sorry, {fish.name} is no longer available</li>
      );
    }
    return (
      <li key={key}>
        {count}x - {fish.name}
        ({formatPrice(count * fish.price)})
        <button onClick={() => this.props.removeFromOrder(key)} >&times;</button>
      </li>
    )
  }
  render () {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order;