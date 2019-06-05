import React from 'react';
import '../styles/post-card.css';

const PostCard = () => {
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
			</div>
		</div>
	);
};

export default PostCard;
