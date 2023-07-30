import React from "react";
import FilterButton from "./FilterButton";
import { useState } from "react";
export default function FilterTasks() {
  const [currentActive, setCurrentActive] = useState("All");
  function handleClick(e) {
    setCurrentActive(e.target.innerText);
  }
  return (
    <div className="flex gap-4 items-center mb-5">
      <FilterButton {...{ handleClick, currentActive }} title="All" />
      <FilterButton {...{ handleClick, currentActive }} title="Completed" />
      <FilterButton {...{ handleClick, currentActive }} title="Incomplete" />
      <FilterButton {...{ handleClick, currentActive }} title="My Tasks" />
    </div>
  );
}
