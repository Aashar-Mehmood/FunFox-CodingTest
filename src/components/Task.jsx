import React, { useState } from "react";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, message, Spin } from "antd";
import useAuth from "../hooks/useAuth";
import EditTaskModal from "./EditTaskModal";
import useFireStore from "../hooks/useFireStore";
export default function Task(props) {
  const { updateTask, getTasks, deleteTask } = useFireStore();
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, groupId } = useAuth();
  const { id, name, description, isCompleted, isPublic, userId, messageApi } =
    props;
  function handleEdit(e) {
    e.preventDefault();
    setOpen(true);
  }

  function confirmDelete() {
    setIsUpdatingTask(true);
    deleteTask(id)
      .then((response) => {
        getTasks(groupId)
          .then((res) => {
            messageApi.open({
              type: "success",
              content: "Task deleted Successfully",
            });
            setIsUpdatingTask(false);
          })
          .catch((err) => {
            messageApi.open({
              type: "error",
              content: "Failed to getTasks",
            });
            setIsUpdatingTask(false);
          });
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: "Failed to delete Task",
        });
        setIsUpdatingTask(false);
      });
  }

  function markComplete(e) {
    e.preventDefault();
    setIsUpdatingTask(true);
    updateTask(id, { isCompleted: !isCompleted })
      .then((response) => {
        getTasks(groupId)
          .then((res) => {
            messageApi.open({
              type: "success",
              content: "Task Status Updated",
            });
            setIsUpdatingTask(false);
          })
          .catch((err) => {
            messageApi.open({
              type: "error",
              content: "Failed to update task Status",
            });
            setIsUpdatingTask(false);
          });
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: "Failed to update task Status",
        });
        setIsUpdatingTask(false);
      });
  }

  return (
    <Spin spinning={isUpdatingTask}>
      <details className="bg-white rounded-lg shadow-md p-3 sm:p-5 mb-5">
        <summary className="flex justify-between items-center cursor-pointer">
          <h3
            className={`sm:text-xl font-bold m-0 ${
              isCompleted ? "opacity-50" : ""
            }`}
          >
            {name}
          </h3>
          {user.uid == userId && (
            <div className="flex gap-3  sm:gap-5">
              <EditOutlined
                onClick={handleEdit}
                className="bg-green-100 text-green-700 px-3 py-2 rounded cursor-pointer"
              />
              <CheckOutlined
                onClick={markComplete}
                className={`${
                  isCompleted
                    ? "bg-blue-500 text-white"
                    : "bg-blue-100 text-blue-500"
                } px-3 py-2 rounded cursor-pointer`}
              />
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={confirmDelete}
                okText="Yes"
                cancelText="No"
                okButtonProps={{ className: "py-0 h-auto" }}
                cancelButtonProps={{ className: "py-0 h-auto" }}
              >
                <DeleteOutlined
                  onClick={(e) => e.preventDefault()}
                  className="bg-red-100 text-red-700 px-3 py-2 rounded cursor-pointer"
                />
              </Popconfirm>
            </div>
          )}
        </summary>
        <p className="mb-0 mt-4">{description}</p>
      </details>
      <EditTaskModal {...{ open, setOpen, id, name, description, isPublic }} />
    </Spin>
  );
}
