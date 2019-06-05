export const fetchPosts = () => async (dispatch) => {
	let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
 	dispatch({
		type: 'FETCH_POSTS',
		payload: data
	}); 
};

export const deletePost = (id) => async (dispatch) => {
	let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'delete'
	});
 	dispatch({
		type: 'DELETE_POST'
	}); 
};
