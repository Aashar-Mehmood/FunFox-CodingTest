import React, { useEffect } from "react";
import FilterButton from "./FilterButton";
import { useState } from "react";
import useData from "../hooks/useData";
import useAuth from "../hooks/useAuth";
export default function FilterTasks() {
  const [currentActive, setCurrentActive] = useState("All");
  const { setTasksData, dataForFilter } = useData();
  const { user } = useAuth();
  function handleClick(e) {
    let filterText = e.target.innerText;
    if (filterText === "Completed") {
      setTasksData(dataForFilter.filter((task) => task.isCompleted));
    } else if (filterText === "Incomplete") {
      setTasksData(dataForFilter.filter((task) => !task.isCompleted));
    } else if (filterText === "My Tasks") {
      setTasksData(dataForFilter.filter((task) => task.userId == user.uid));
    } else {
      setTasksData(dataForFilter);
    }
    setCurrentActive(e.target.innerText);
  }
  return (
    <div className="flex flex-wrap gap-4 items-center mb-5">
      <FilterButton {...{ handleClick, currentActive }} title="All" />
      <FilterButton {...{ handleClick, currentActive }} title="Completed" />
      <FilterButton {...{ handleClick, currentActive }} title="Incomplete" />
      <FilterButton {...{ handleClick, currentActive }} title="My Tasks" />
    </div>
  );
}
