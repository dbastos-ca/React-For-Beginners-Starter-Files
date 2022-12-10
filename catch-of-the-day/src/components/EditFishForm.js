import React from "react";


class EditFishForm extends React.Component {
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render () {
    return (
      <div className="fish-edit">
        <input name="name" onChange={this.handleChange} defaultValue={this.props.fish.name} type="text" placeholder="Name" />
        <input name="price" onChange={this.handleChange} defaultValue={this.props.fish.price} type="text" placeholder="Price" />
        <select name="status" onChange={this.handleChange} defaultValue={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="Desc" onChange={this.handleChange} defaultValue={this.props.fish.desc}></textarea>
        <input name="image" onChange={this.handleChange} defaultValue={this.props.fish.image} type="text" placeholder="Image" />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )
  }
}

export default EditFishForm;