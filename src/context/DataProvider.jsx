import { createContext, useState } from "react";
const tasks = [
  {
    id: 1,
    userId: 1,
    groupId: 1,
    name: "First Task",
    description:
      "first task description is a long text that will be displayed on details show hide",
    isCompleted: false,
    isPublic: true,
  },
];
export const DataContext = createContext();
export default function DataProvider(props) {
  const [tasksData, setTasksData] = useState([]);
  const [dataForFilter, setDataForFilter] = useState([]);
  return (
    <DataContext.Provider
      value={{
        tasksData,
        setTasksData,
        dataForFilter,
        setDataForFilter,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
