import { Card, Col, Row, Table, Tag } from "antd";
import dumbel from "../../assets/dumbbell.png";
import runner from "../../assets/runner.png";
import user from "../../assets/profile.png";

import abs from "../../assets/abs.png";
import arms from "../../assets/arms.png";
import back from "../../assets/back.png";
import chest from "../../assets/chest.png";
import { useState } from "react";

const workoutColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  Table.EXPAND_COLUMN,
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
];

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
];
export default function Dashbaord() {
  // useEffect to fetch general stats and latest exercises
  // then setStats and setExercises to response
  const [workouts, setWorkouts] = useState(workoutData);
  const [exercises, setExercises] = useState(exerciseData);

  return (
    <>
      <h2 className="text-2xl mt-0">General Statistics</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Total Workouts" bordered={false}>
            <div className="flex justify-between items-center">
              <img className="w-16 h-16" src={dumbel} alt="Workouts" />
              <h2 className="text-3xl my-0">20</h2>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Exercises" bordered={false}>
            <div className="flex justify-between items-center">
              <img className="w-16 h-16" src={runner} alt="Exercise" />
              <h2 className="text-3xl my-0">50</h2>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Users" bordered={false}>
            <div className="flex justify-between items-center">
              <img className="w-16 h-16" src={user} alt="Users" />
              <h2 className="text-3xl my-0">100</h2>
            </div>
          </Card>
        </Col>
      </Row>
      <h2 className="text-2xl mt-8">Latest Workouts</h2>
      <div className="bg-white p-8 shadow rounded mt-4">
        <Table
          bordered
          size="small"
          scroll={{
            x: 700,
          }}
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
          dataSource={workouts}
        />
      </div>
      <h2 className="text-2xl mt-8">Latest Exercises</h2>
      <div className="bg-white p-8 shadow rounded mt-4">
        <Table
          bordered
          scroll={{
            x: 700,
          }}
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
          columns={exerciseColumns}
          dataSource={exercises}
        />
      </div>
    </>
  );
}
