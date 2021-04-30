import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Posts } from "./Posts";
import { Pagination } from "./Pagination";

export const Posts2 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:3000/product/");
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return (
        <section className="pagination">
            <div className="container">
                <h2>Pagination</h2>
            </div>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </section>
    );
};
