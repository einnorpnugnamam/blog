import React, { useState, useRef, useEffect } from "react";
import CreateNewPost from "./CreateNewPost";
import ModifyPost from "./ModifyPost"
import AllPost from "./AllPost";

var data = [];
async function fetchData() {
	// You can await here
    if(localStorage.getItem('jsonData')) {
    	data = JSON.parse(localStorage.getItem('jsonData'));
    }
}

fetchData();
const DisplayAllPosts = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [allPosts, setAllPosts] = useState(data);
	const [isCreateNewPost, setIsCreateNewPost] = useState(false);
	const [isModifyPost, setIsModifyPost] = useState(false);
	const [editPostId, setEditPostId] = useState("");
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		const data = JSON.stringify(allPosts);
		localStorage.setItem('jsonData', data);
	}, [allPosts]);

	// Initialize useRef
	const getTitle = useRef();
	const getContent = useRef();

	const savePostTitleToState = event => {
		setTitle(event.target.value);
	};

	const cancelPost = event => {
		setIsCreateNewPost(!isCreateNewPost);
	};

	const cancelUpdate = event => {
		setIsModifyPost(!isModifyPost);
	};

	const savePostContentToState = event => {
		setContent(event.target.value);
	};

	const toggleCreateNewPost = () => {
		setIsCreateNewPost(!isCreateNewPost);
	};

	const toggleModifyPostComponent = (x) => {
		setUpdate(x);
		setIsModifyPost(!isModifyPost)
	};

	const editPost = (id, x) => {
		setEditPostId(id);
		toggleModifyPostComponent(x);
	};

	const deletePost = id => {
		const modifiedPost = allPosts.filter(eachPost => {
			return eachPost.id !== id;
		});
		setAllPosts(modifiedPost);
	};

	const updatePost = (event) => {
		event.preventDefault();
		const updatedPost = allPosts.map(eachPost => {
			if (eachPost.id === editPostId) {
				return {
					...eachPost,
					title: title || eachPost.title,
					content: content || eachPost.content
				};
			}
			return eachPost;
		});
		setAllPosts(updatedPost);
		toggleModifyPostComponent();
	};

	const savePost = event => {
		event.preventDefault();
		const id = Date.now();
		let date = new Date();
		date = "0" + parseInt(date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();

		setAllPosts([...allPosts, { title, content, date, id }]);
		setTitle("");
		setContent("");
		getTitle.current.value = "";
		getContent.current.value = "";
		toggleCreateNewPost();
	};

	if (isCreateNewPost) {
		return (
			<>
				<CreateNewPost
					savePostTitleToState={savePostTitleToState}
					savePostContentToState={savePostContentToState}
					getTitle={getTitle}
					getContent={getContent}
					savePost={savePost}
					deletePost={deletePost}
					cancelPost={cancelPost}
				/>
			</>
		);
	} else if (isModifyPost) {
		const post = allPosts.find(post => {
			return post.id === editPostId;
		});

		return (
			<ModifyPost
				title={post.title}
				content={post.content}
				updatePost={updatePost}
				viewUpdate={update}
				cancelUpdate={cancelUpdate}
				savePostTitleToState={savePostTitleToState}
				savePostContentToState={savePostContentToState}
			/>
		);
	}

	return (
		<>
			<AllPost allPosts={allPosts} toggleCreateNewPost={toggleCreateNewPost} editPost={editPost} deletePost={deletePost} />
		</>
	);
};
export default DisplayAllPosts;