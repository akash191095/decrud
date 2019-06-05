import React from 'react';
import { connect } from 'react-redux';
import { editPost } from '../actions';
import '../styles/edit-box.css';

class EditBox extends React.Component {
	state = { title: '', body: '' };

	componentDidMount() {
		this.setState({ title: this.props.title, body: this.props.body });
	}

	onInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = () => {
		const body = {
			title: this.state.title,
			body: this.state.body,
			userId: this.props.userID
		};
		this.props.dispatch(editPost(this.props.id, body));
	};

	render() {
		return (
			<div className="edit-box-wrapper">
				<input type="text" name="title" value={this.state.title} onChange={(e) => this.onInputChange(e)} />
				<textarea
					name="body"
					cols="30"
					rows="10"
					value={this.state.body}
					onChange={(e) => this.onInputChange(e)}
				/>
				<button className="btn-save" onClick={() => this.onSubmit()}>Save</button>
			</div>
		);
	}
}

export default connect(null)(EditBox);
