export const fetchPosts = () => async (dispatch) => {
	let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
 	dispatch({
		type: 'FETCH_POSTS',
		payload: data
	}); 
};
