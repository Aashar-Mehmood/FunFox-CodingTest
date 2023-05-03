import React, { useState } from "react";
import { Table, Tag, Button, Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import AddWorkoutModal from "../../components/modals/AddWorkoutModal";
export default function Workouts() {
  const workoutColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    Table.EXPAND_COLUMN,
    {
      title: "Add Exercise",
      key: "addExercise",
      render: (record) => (
        <Link
          className="p-2 border rounded bg-blue-500 text-white"
          to={`/workouts/${record.key}/addExercise`}
        >
          Add Exercise
        </Link>
      ),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <>
          {tags?.split(",").map((tag) => {
            return (
              <Tag color="blue" key={tag}>
                {tag.trim().toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Image",
      key: "image",
      render: (text, record) => {
        {
          return record.image ? (
            <img src={record.image} alt="---" className="w-8 h-8" />
          ) : (
            <p>---</p>
          );
        }
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={`/workouts/${record.key}/edit`}
            state={{ ...record }}
            className="mr-4"
          >
            <Button type="primary">Edit</Button>
          </Link>
          <Popconfirm
            title="Delete Workout"
            description="Are you sure to delete this workout?"
            onConfirm={() => confirmDelete(record.key)}
            onCancel={() => null}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  const { workouts, setWorkouts } = useData();
  const [open, setOpen] = useState(false);

  const confirmDelete = (key) => {
    setWorkouts(workouts.filter((item) => item.key !== key));
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setOpen(true)}
        className="py-2 h-auto mb-4"
      >
        New Workout
      </Button>
      <div className="bg-white px-8 py-4 shadow rounded">
        <h2 className="mb-4">Workouts</h2>
        <Table
          scroll={{
            x: 900,
          }}
          bordered
          expandable={{
            columnTitle: "Description",
            expandedRowRender: (record) => (
              <p className="m-0">{record.description}</p>
            ),
          }}
          columns={workoutColumns}
          dataSource={workouts}
        />
      </div>
      <AddWorkoutModal open={open} setOpen={setOpen} />
    </>
  );
}
