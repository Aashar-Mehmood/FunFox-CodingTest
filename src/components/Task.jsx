import React from "react";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import useAuth from "../hooks/useAuth";
export default function Task(props) {
  const { user } = useAuth();
  const { id, name, description, isCompleted, userId } = props;
  function confirmDelete(e) {
    console.log(e);
  }

  function markComplete(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <details className="bg-white rounded-lg shadow-md  p-5 mb-5">
      <summary className="flex justify-between items-center cursor-pointer">
        <h3 className={`text-xl m-0 ${isCompleted ? "opacity-70" : ""}`}>
          {name}
        </h3>
        {user.uid == userId && (
          <div className="flex gap-5">
            <EditOutlined
              onClick={markComplete}
              className="bg-green-100 text-green-700 px-3 py-2 rounded cursor-pointer"
            />
            <CheckOutlined
              onClick={markComplete}
              className="bg-blue-100 text-blue-500 px-3 py-2 rounded cursor-pointer"
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
  );
}
