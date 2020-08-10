import React from "react";
const ModifyPost = (props) => {
	if(!props.viewUpdate) {
		return (
			<><section className="create-post view-post">
				<form>
					<h1>{props.title}</h1>
					<p>{props.content}</p>
					<div className="btn-wrapper">
						<button className="button ad-mr-5" type="button" onClick={props.cancelUpdate}>Cancel</button>
					</div>
				</form>
				</section>
			</>
		);
	}
	return (
		<><section className="create-post">
			<form>
				<h1>Modify Post</h1>
				<input type='text'
					defaultValue={props.title}
					onChange={props.savePostTitleToState}
					placeholder="title"
					required />
				<textarea
					defaultValue={props.content}
					placeholder="content"
					onChange={props.savePostContentToState}
					rows="8"
					cols="41"
					required>
				</textarea>
				<div className="btn-wrapper">
					<button className="button ad-mr-5" type="button" onClick={props.cancelUpdate}>Cancel</button>
					<button className="button ad-ml-5" onClick ={props.updatePost}>Update Post</button>
				</div>
			</form>
			</section>
		</>
	);
};
export default ModifyPost;
