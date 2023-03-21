function Counter({ size, addOne, subtractOne }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={subtractOne} style={{ marginRight: 10 }}>
        -
      </button>
      <span>{size}</span>
      <button onClick={addOne} style={{ marginLeft: 10 }}>
        +
      </button>
    </div>
  );
}

export default Counter;
