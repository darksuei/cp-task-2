const DropDownFilled = () => {
  return (
    <div
      className="dropdown-filled"
      onClick={() => {
        alert("Coming Soon");
      }}
    >
      <div className="left">
        <p>Move To Video Interview I</p>
      </div>
      <div className="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_17_2623)">
            <path
              d="M11.06 5.72668L8 8.78002L4.94 5.72668L4 6.66668L8 10.6667L12 6.66668L11.06 5.72668Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_2623">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default DropDownFilled;
