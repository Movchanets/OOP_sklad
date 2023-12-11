import React from "react";
import { IconType } from "./types";

const HelpIcon: React.FC<IconType> = ({ className, color }) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fill={color ?? "#022B3A"}
          d="M9.95 16c.35 0 .646-.12.888-.363.241-.241.362-.537.362-.887s-.12-.646-.362-.887a1.207 1.207 0 0 0-.888-.363c-.35 0-.646.12-.887.363a1.207 1.207 0 0 0-.363.887c0 .35.12.646.363.887.241.242.537.363.887.363Zm-.9-3.85h1.85c0-.55.063-.983.188-1.3.125-.317.479-.75 1.062-1.3a7.496 7.496 0 0 0 1.025-1.238c.25-.391.375-.862.375-1.412 0-.933-.342-1.65-1.025-2.15-.683-.5-1.492-.75-2.425-.75-.95 0-1.72.25-2.313.75-.591.5-1.004 1.1-1.237 1.8l1.65.65c.083-.3.27-.625.563-.975.291-.35.737-.525 1.337-.525.533 0 .933.146 1.2.438.267.291.4.612.4.962 0 .333-.1.646-.3.938-.2.291-.45.562-.75.812-.733.65-1.183 1.142-1.35 1.475-.167.333-.25.942-.25 1.825ZM10 20a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 0 10c0-1.383.263-2.683.787-3.9a10.099 10.099 0 0 1 2.138-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 10 0c1.383 0 2.683.263 3.9.787a10.098 10.098 0 0 1 3.175 2.138c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 20 10a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 10 20Zm0-2c2.233 0 4.125-.775 5.675-2.325C17.225 14.125 18 12.233 18 10c0-2.233-.775-4.125-2.325-5.675C14.125 2.775 12.233 2 10 2c-2.233 0-4.125.775-5.675 2.325C2.775 5.875 2 7.767 2 10c0 2.233.775 4.125 2.325 5.675C5.875 17.225 7.767 18 10 18Z"
        />
      </svg>
    </>
  );
};
export default HelpIcon;
