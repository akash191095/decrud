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

export const editPost = (id, body) => async (dispatch) => {
	let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json; charset=UTF-8'
		}
	});
	// might want to do other stuff...
};
