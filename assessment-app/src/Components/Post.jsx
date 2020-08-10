import React from "react";

const Post = ({ title, content, editPost, id, deletePost, date }) => {
	let cont = content;
	if(content.length > 20) {
		cont = content.substr(0, 20) + '...';
	}
	return (
		<>
			<section className="post-list">
				<div className="list-content">
					<div className="content" onClick={() => editPost(id, false)}>{title}</div>
					<div className="content" onClick={() => editPost(id, false)}>{cont}</div>
					<div className="content" onClick={() => editPost(id, false)}>{date}</div>
					<div className="content">
						<i className="far fa-edit" onClick={() => { if (window.confirm('Are you sure you want to update this post?')) editPost(id, true)}}></i>
						<i className="far fa-trash-alt" onClick={() => { if (window.confirm('Are you sure you wish to delete this post?')) deletePost(id)}}></i>
					</div>
				</div>
			</section>
		</>
	);
};
export default Post;
