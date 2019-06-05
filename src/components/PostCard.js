import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import '../styles/post-card.css';
import EditBox from './EditBox';

class PostCard extends React.Component {
	state = { showEditBox: false };

	onDelete = () => {
		this.props.dispatch(deletePost(this.props.id));
	};

	onEdit = () => {
		this.setState({ showEditBox: !this.state.showEditBox });
	};
	render() {
		return (
			<div>
				<div className="post-card-wrapper">
					<div className="post-card-avatar-container">
						<img src={require('../assets/avatar.png')} alt="avatar" />
						<div className="user-id">
							<p>User: {this.props.userID}</p>
						</div>
					</div>
					<div>
						<div className="post-card-title">
							<p>
								<strong>Title:</strong> {this.props.title}
							</p>
						</div>
						<div className="post-card-body">
							<p>
								<strong>Body:</strong>
								{this.props.body}
							</p>
						</div>
						<div className="post-card-button-container">
							<button className="btn-delete" onClick={() => this.onDelete()}>
								Delete
							</button>
							<button className="btn-edit" onClick={() => this.onEdit()}>
								Edit
							</button>
						</div>
					</div>
				</div>
				<div>
					{this.state.showEditBox && (
						<EditBox
							title={this.props.title}
							body={this.props.body}
							userID={this.props.userID}
							id={this.props.id}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default connect(null)(PostCard);
