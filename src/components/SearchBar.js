import React, { Component } from "react";

class SearchBar extends Component {
	state = { term: "" };

	//Fix broken this by either binding this or use arrow functions on the methods
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};

	render() {
		return (
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label>Image Search</label>
						<input
							type='text'
							placeholder='Search an image...'
							value={this.state.term}
							name='term'
							onChange={(e) => {
								this.setState({ [e.target.name]: e.target.value });
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
