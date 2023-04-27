import React, { useState } from "react";
import { Table, Tag, Button, Modal, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const workoutData = [
  {
    key: "1",
    name: "Workout 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
    tags: ["tag1", "tag2"],
  },
  {
    key: "2",
    name: "Workout 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
    tags: ["tag1", "tag3"],
  },
  {
    key: "3",
    name: "Workout 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
    tags: ["tag2", "tag3"],
  },
];
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
          {tags.map((tag) => {
            return (
              <Tag color="blue" key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
          <Button danger onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const [workouts, setWorkouts] = useState(workoutData);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleCreate = () => {
    setOpen(true);
  };

  const handleDelete = (record) => {
    setWorkouts(workouts.filter((item) => item.key !== record.key));
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newWorkout = {
        key: Date.now(),
        ...values,
      };
      setWorkouts([...workouts, newWorkout]);
      form.resetFields();
      setOpen(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleCreate}
        className="py-2 h-auto mb-4"
      >
        New Workout
      </Button>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="mb-4">Workouts</h2>
        <Table
          expandable={{
            columnTitle: "Description",
            expandedRowRender: (record) => (
              <p
                style={{
                  margin: 0,
                }}
              >
                {record.description}
              </p>
            ),
          }}
          columns={workoutColumns}
          dataSource={workoutData}
        />
      </div>
      <Modal
        title="Create New Workout"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter workout name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Comma Separated Tags" name="tags">
            <Input placeholder="Tag1, Tag2, Tag3" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
