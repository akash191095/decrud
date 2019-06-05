import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostCard from './PostCard';

class RenderPosts extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	// renderPosts = () => {
	// 	return this.props.posts.map(item => {
	// 		const { userId, title, body } = this.props.posts;
	// 		<PostCard userID={} />
	// 	});
	// };

	render() {
		return (
			<div>
				<PostCard />
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		posts: state.posts.fetchedPosts
	};
};

export default connect(mapStateToProps)(RenderPosts);
