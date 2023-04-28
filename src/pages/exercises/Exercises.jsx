import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  Modal,
  Input,
  InputNumber,
  Upload,
  Select,
  Popconfirm,
} from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import back from "../../assets/back.png";

const exerciseData = [
  {
    key: "1",
    name: "Push Ups",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

    workoutName: "Chest",
    sets: 10,
    reps: 4,
    time: 20,
    image: back,
  },
  {
    key: "2",
    name: "Bench Press",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

    workoutName: "Arms",
    sets: 6,
    reps: 3,
    time: 15,
    image: back,
  },
  {
    key: "3",
    name: "Pull Ups",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

    workoutName: "Arms",
    sets: 8,
    reps: 7,
    time: 20,
    image: back,
  },
];

const allWorkouts = [
  {
    key: 1,
    name: "chest",
  },
  {
    key: 2,
    name: "legs",
  },
  {
    key: 3,
    name: "arms",
  },
  {
    key: 4,
    name: "back",
  },
];

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
  const [exercises, setExercises] = useState(exerciseData);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const handleCreate = () => {
    form.validateFields().then((values) => {
      const newExercise = {
        key: Date.now(),
        ...values,
      };
      setWorkouts([...workouts, newExercise]);
      form.resetFields();
      setOpen(false);
    });
  };

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
      <Modal
        title="Create New Exercise"
        open={open}
        onOk={handleCreate}
        onCancel={() => {
          form.resetFields();
          setOpen(false);
        }}
        okButtonProps={{ className: "px-8 py-2 h-auto ml-8" }}
        cancelButtonProps={{ className: "px-6 py-2 h-auto " }}
        okText="Create"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            className="mb-4"
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter exercise name" }]}
          >
            <Input className="py-2" />
          </Form.Item>
          <Form.Item className="mb-4" label="Description" name="description">
            <Input.TextArea className="py-2" />
          </Form.Item>
          <Form.Item className="mb-4" label="Workout" name="workout">
            <Select
              placeholder="Select a workout"
              options={allWorkouts.map((workout) => {
                return {
                  value: workout.key,
                  label: workout.name,
                };
              })}
            />
          </Form.Item>
          <div className="flex justify-between mb-4">
            <Form.Item className="mb-0" label="Sets" name="sets">
              <InputNumber min={1} className="py-1" />
            </Form.Item>
            <Form.Item className="mb-0" label="Reps" name="reps">
              <InputNumber min={1} className="py-1" />
            </Form.Item>
            <Form.Item className="mb-0" label="Time (mins)" name="time">
              <InputNumber min={1} className="py-1" />
            </Form.Item>
          </div>
          <Form.Item className="mb-8" label="Image" name="image">
            <Upload accept="image/*" maxCount={1}>
              <Button className="py-2 h-auto" icon={<UploadOutlined />}>
                Upload Exercise Image
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
