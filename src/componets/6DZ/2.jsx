import React, { useState } from "react";

export default function PostFetcher() {
    const [id, setId] = useState("");
    const [post, setPost] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getPost = async () => {
        const raw = id.trim();
        if (!raw) {
            setError("Введите ID поста.");
            setPost(null);
            return;
        }

        const num = Number(raw);
        if (!Number.isInteger(num) || num <= 0) {
            setError("ID должен быть положительным целым числом.");
            setPost(null);
            return;
        }

        setLoading(true);
        setError("");
        setPost(null);

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);

            if (res.status === 404) {
                setError(`Пост с ID ${num} не найден.`);
                return;
            }

            if (!res.ok) {
                setError(`Ошибка запроса: ${res.status} ${res.statusText}`);
                return;
            }

            const data = await res.json();
            setPost(data);
        } catch (e) {
            setError("Не удалось загрузить данные. Проверьте соединение с интернетом.");
        } finally {
            setLoading(false);
        }
    };

    const onChangeId = e => {
        setId(e.target.value);
        if (error) setError("");
    };

    return (
        <div>
            <input
                value={id}
                onChange={onChangeId}
                placeholder="ID"
                inputMode="numeric"
                pattern="[0-9]*"
            />
            <button onClick={getPost} disabled={loading}>
                {loading ? "Загрузка..." : "Получить"}
            </button>

            {error && <p style={{ color: "crimson" }}>{error}</p>}

            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
}