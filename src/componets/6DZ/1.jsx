import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count <= 0) {
        } else {
            setCount(count - 1);
        }
    };

    return (
        <>
            <p>Текущее значение: {count}</p>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>

            {count === 0 && (
                <p style={{ color: "red" }}>
                    Пожалуйста, измените количество, оно не может быть равно 0
                </p>
            )}
        </>
    );
}

export default Counter;