import React from "react";
import Post from "./Post";

const AllPost = props => {
	if(!props.allPosts.length) {
		return (
			<>
				<section className="no-post">
					<h1>No Post Found!</h1>
					<h3>There is nothing to see here.</h3>
					<button onClick={props.toggleCreateNewPost} className="button">Create New</button>
				</section>
			</>
		);
	} else {
		return (
			<>
				<section className="post-item-container">
					<button onClick={props.toggleCreateNewPost} className="button btn-create-new">Create New</button>
					<section className="all-post">
						<section className="post-list">
							<div className="list-title">
								<div className="head-title">Title</div>
								<div className="head-title">Content</div>
								<div className="head-title">Date Saved</div>
								<div className="head-title">
									Update / Delete
								</div>
							</div>
						</section>
						{props.allPosts.map(eachPost => {
							return (
								<Post
									id={eachPost.id}
									key={eachPost.id}
									title={eachPost.title}
									date={eachPost.date}
									content={eachPost.content}
									editPost={props.editPost}
									deletePost={props.deletePost}
								/>
							);
						})}
					</section>
				</section>
			</>
		);
	}
};
export default AllPost;
