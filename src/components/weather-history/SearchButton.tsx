import React from "react";

interface ISearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<ISearchButtonProps> = ({ onClick }) => {
  return (
    <button className="search-button" onClick={onClick}>
      <svg
        fill="#000000"
        height="24px"
        width="24px"
        version="1.1"
        id="search"
        viewBox="-10, 0, 500, 500"
        stroke="#000000"
        strokeWidth="24"
      >
        <g>
          <g>
            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default SearchButton;
