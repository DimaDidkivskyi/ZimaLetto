import React from "react";

export const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
