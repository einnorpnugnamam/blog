import React from "react";
const CreateNewPost = props => {
	return (
		<>
		<section className="create-post">
			<form onSubmit={props.savePost}>
				<h1>Create New Post</h1>
				<input
					type="text"
					onChange={props.savePostTitleToState}
					placeholder="Title"
					required
					ref={props.getTitle}
				></input>
				<textarea
					onChange={props.savePostContentToState}
					placeholder="Content"
					rows="8"
					cols="41"
					required
					ref={props.getContent}
				></textarea>
				<div className="btn-wrapper">
					<button className="button ad-mr-5" type="button" onClick={props.cancelPost}>Cancel</button>
					<button className="button ad-ml-5">Save Post</button>
				</div>
			</form>
			</section>
		</>
	);
};
export default CreateNewPost;
