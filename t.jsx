

return (
    <div>
        <p>{state.counter}</p>
        <button onClick={() => dispactch({ type: "Increment"})}>Increment</button>
        <button onClick={() => dispactch({ type: "Decrement"})}>Decrement</button>

    </div>
)