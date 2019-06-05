import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import '../styles/post-card.css';

const PostCard = (props) => {
	const onDelete = () => {
		props.dispatch(deletePost(props.id));
	};
	return (
		<div className="post-card-wrapper">
			<div className="post-card-avatar-container">
				<img src={require('../assets/avatar.png')} alt="avatar" />
				<div className="user-id">
					<p>User: {props.userID}</p>
				</div>
			</div>
			<div>
				<div className="post-card-title">
					<p>Title: {props.title}</p>
				</div>
				<div className="post-card-body">
					<p>
						Body: 
						{props.body}
					</p>
				</div>
				<div className='post-card-button-container'>
					<button className='btn-delete' onClick={() => onDelete()}>Delete</button>
					<button className='btn-edit'>Edit</button>
				</div>
			</div>
		</div>
	);
};

export default connect(null)(PostCard);
