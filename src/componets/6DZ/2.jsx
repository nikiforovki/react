import React, { useState } from "react";

export default function PostFetcher() {
    const [id, setId] = useState("");
    const [post, setPost] = useState(null);

    const getPost = async () => {
        if (!id.trim()) return;
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.trim()}`);
        if (res.ok) setPost(await res.json());
        else setPost(null);
    };

    return (
        <div>
            <input value={id} onChange={e => setId(e.target.value)} placeholder="ID" />
            <button onClick={getPost}>Получить</button>

            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
}
