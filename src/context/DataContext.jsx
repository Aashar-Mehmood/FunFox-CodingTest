import { createContext, useState } from "react";
export const DataContext = createContext();
import abs from "../assets/abs.png";
import arms from "../assets/arms.png";
import back from "../assets/back.png";
import chest from "../assets/chest.png";

export default function DataProvider(props) {
  const workoutData = [
    {
      key: "1",
      name: "Abs",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
      tags: "tag1, tag2",
      image: abs,
    },
    {
      key: "2",
      name: "Arms",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
      tags: "tag1, tag3",
      image: arms,
    },
    {
      key: "3",
      name: "Back",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
      tags: "tag2, tag3",
      image: back,
    },
    {
      key: "4",
      name: "Chest",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",
      tags: "tag2, tag3, tag4",
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

  const [workouts, setWorkouts] = useState(workoutData);
  const [exercises, setExercises] = useState(exerciseData);

  return (
    <DataContext.Provider
      value={{ workouts, setWorkouts, exercises, setExercises }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
