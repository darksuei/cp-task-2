const Loading = () => {
  return (
    <div className="spinner-container">
      <svg className="spinner-abs" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          stroke="blue"
        ></circle>
      </svg>
    </div>
  );
};

export default Loading;
