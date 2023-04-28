import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  Upload,
  Popconfirm,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import abs from "../../assets/abs.png";
import arms from "../../assets/arms.png";
import back from "../../assets/back.png";
import chest from "../../assets/chest.png";
const workoutData = [
  {
    key: "1",
    name: "Abs",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
    tags: ["tag1", "tag2"],
    image: abs,
  },
  {
    key: "2",
    name: "Arms",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
    tags: ["tag1", "tag3"],
    image: arms,
  },
  {
    key: "3",
    name: "Back",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
    tags: ["tag2", "tag3"],
    image: back,
  },
  {
    key: "4",
    name: "Chest",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
    tags: ["tag2", "tag3", "tag4"],
    image: chest,
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
      title: "Image",
      key: "image",
      render: (text, record) => (
        <img src={record.image} alt="text" className="w-8" />
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

  const [workouts, setWorkouts] = useState(workoutData);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const confirmDelete = (key) => {
    console.log(key);
    setWorkouts(workouts.filter((item) => item.key !== key));
  };

  const handleCreate = () => {
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
      <Modal
        title="Create New Workout"
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
        <Form form={form} layout="vertical" className="my-4">
          <Form.Item
            className="mb-6"
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter workout name" }]}
          >
            <Input className="py-2" />
          </Form.Item>
          <Form.Item className="mb-6" label="Description" name="description">
            <Input.TextArea className="py-2" />
          </Form.Item>
          <Form.Item className="mb-6" label="Comma Separated Tags" name="tags">
            <Input className="py-2" placeholder="Tag1, Tag2, Tag3" />
          </Form.Item>
          <Form.Item className="mb-6" label="Image" name="image">
            <Upload accept="image/*" maxCount={1}>
              <Button className="py-2 h-auto" icon={<UploadOutlined />}>
                Upload Workout Image
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
