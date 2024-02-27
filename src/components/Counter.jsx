import { useState } from "preact/hooks";

export function Counter () {
    const { counter, incrementCounter, decrementCounter } = useCounter();

    return [
        <>
            <button onClick={() => incrementCounter(counter => counter + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Incrementar <span className="text-xs">{counter}</span>
            </button>
        
        </>
    ]
}

export function useCounter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };

    return {
        counter,
        incrementCounter,
        decrementCounter
    };
}
