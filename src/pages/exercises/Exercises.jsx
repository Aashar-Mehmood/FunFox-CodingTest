import React, { useState } from "react";
import { Table, Button, Form, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import useData from "../../hooks/useData";
import AddExerciseModal from "../../components/modals/AddExerciseModal";
export default function Exercises() {
  const exerciseColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    Table.EXPAND_COLUMN,
    {
      title: "Workout Name",
      dataIndex: "workoutName",
      key: "workoutName",
    },
    {
      title: "Sets",
      dataIndex: "sets",
      key: "sets",
    },
    {
      title: "Reps",
      dataIndex: "reps",
      key: "reps",
    },
    {
      title: "Time (min)",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "Image",
      key: "image",
      render: (record) => (
        <img src={record.image} className="w-8 h-8" alt="exercise image" />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link to={`/exercises/${record.key}/edit`} state={{ ...record }}>
            <Button type="primary" className="mr-4">
              Edit
            </Button>
          </Link>
          <Popconfirm
            title="Delete Exercise"
            description="Are you sure to delete this exercise?"
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
  const { exercises, setExercises } = useData();
  const [open, setOpen] = useState(false);

  const confirmDelete = (key) => {
    setExercises(exercises.filter((item) => item.key !== key));
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setOpen(true)}
        className="py-2 h-auto mb-4"
      >
        New Exercise
      </Button>
      <div className="bg-white px-8 py-4 shadow rounded">
        <h2 className="mb-4">Exercises</h2>
        <Table
          bordered
          scroll={{ x: 700 }}
          expandable={{
            columnTitle: "Description",
            expandedRowRender: (record) => (
              <p className="m-0">{record.description}</p>
            ),
          }}
          columns={exerciseColumns}
          dataSource={exercises}
        />
      </div>
      <AddExerciseModal open={open} setOpen={setOpen} />
    </>
  );
}
