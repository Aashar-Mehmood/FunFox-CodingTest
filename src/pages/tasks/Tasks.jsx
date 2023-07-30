import { firebaseAuth } from "../../firebase";
import AddTaskModal from "../../components/AddTaskModal";
import FilterTasks from "../../components/FilterTasks";
import Task from "../../components/Task";
import { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import useFireStore from "../../hooks/useFireStore";
import useAuth from "../../hooks/useAuth";
export default function Tasks() {
  const [open, setOpen] = useState(false);
  const { tasksData } = useData();
  const { getTasks } = useFireStore();
  const { user } = useAuth();
  useEffect(() => {
    getTasks(localStorage.getItem("userGroupId"));
  }, []);
  console.log(tasksData);

  const tasks = tasksData.map((task) => {
    if (task.userId !== user.uid && !task.isPublic) {
      return;
    }
    return <Task {...task} key={task.id} />;
  });

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl m-0">
          Welcome {firebaseAuth.currentUser.email.split("@")[0]}
        </h2>
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 rounded cursor-pointer px-4 py-2 border-none transition-colors hover:bg-green-600 "
        >
          Add New Task
        </button>
      </div>
      <FilterTasks />
      {tasks}

      <AddTaskModal {...{ open, setOpen }} />
    </>
  );
}
