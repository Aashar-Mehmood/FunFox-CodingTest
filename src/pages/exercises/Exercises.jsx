import React, { useState } from "react";
import { Table, Button, Form } from "antd";

const exerciseColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
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
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Button
          type="primary"
          className="mr-4"
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
        <Button danger onClick={() => handleDelete(record)}>
          Delete
        </Button>
      </span>
    ),
  },
];

const exerciseData = [
  {
    key: "1",
    name: "Push Ups",
    workoutName: "Workout 1",
    sets: 10,
    reps: 4,
    time: 20,
  },
  {
    key: "2",
    name: "Bench Press",
    workoutName: "Workout 2",
    sets: 6,
    reps: 3,
    time: 15,
  },
  {
    key: "3",
    name: "Pull Ups",
    workoutName: "Workout 1",
    sets: 8,
    reps: 7,
    time: 20,
  },
];

export default function Exercises() {
  const [exercises, setExercises] = useState(exerciseData);
  const [form] = Form.useForm();

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setOpen(true);
  };

  const handleDelete = (record) => {
    setExercises(exercises.filter((item) => item.key !== record.key));
  };

  return (
    <div className="bg-white p-4 shadow rounded mt-4 md:max-w-xl">
      <h2 className="mb-4">Exercises</h2>
      <Table columns={exerciseColumns} dataSource={exerciseData} />
    </div>
  );
}
