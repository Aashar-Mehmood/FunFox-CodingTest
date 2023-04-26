import { Card, Col, Row, Table } from "antd";
import dumbel from "../../assets/dumbbell.png";
import runner from "../../assets/runner.png";
import user from "../../assets/profile.png";
import { useState } from "react";
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
export default function Dashbaord() {
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
      <h2 className="text-2xl mt-8">Latest Exercises</h2>
      <div className="bg-white p-4 shadow rounded mt-4">
        <Table columns={exerciseColumns} dataSource={exerciseData} />
      </div>
    </>
  );
}
