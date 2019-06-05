import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostCard from './PostCard';
import '../styles/render-posts.css';

class RenderPosts extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	renderPosts = () => {
		return this.props.posts.map((item) => {
			const { userId, title, body, id } = item;
			return <PostCard userID={userId} title={title} body={body} id={id} key={id}/>;
		});
	};

	render() {
		return (
			<div className='render-posts-wrapper'>
				{this.renderPosts()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts.posts
	};
};

export default connect(mapStateToProps)(RenderPosts);
