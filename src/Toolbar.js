export default function Toolbar({ handleClick }) {
    return (
      <div className="toolbar">
        <button
          className="white-btn"
          onClick={() => handleClick("white")}
          aria-label="White"
          text="White"
        >White</button>
        <button
          className="yellow-btn"
          onClick={() => handleClick("yellow")}
          aria-label="Yellow"
          text="Yellow"
        >Yellow</button>
        <button
          className="black-btn"
          onClick={() => handleClick("black")}
          aria-label="Black"
          text="Black"
        >Black</button>
      </div>
    )
  }