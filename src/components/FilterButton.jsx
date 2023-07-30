import React from "react";
import { Button } from "antd";
export default function FilterButton(props) {
  const { title, handleClick, currentActive } = props;
  return (
    <Button
      type="text"
      onClick={handleClick}
      className={`px-4 py-2 border-none rounded h-auto ${
        currentActive === title ? "bg-green-600 " : "bg-white"
      }`}
    >
      {title}
    </Button>
  );
}
