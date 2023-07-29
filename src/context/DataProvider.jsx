import { createContext, useState } from "react";
import abs from "../assets/abs.png";
import arms from "../assets/arms.png";
import back from "../assets/back.png";
import chest from "../assets/chest.png";
export const DataContext = createContext();
export default function DataProvider(props) {
  const workoutData = [
    {
      key: "1",
      name: "Abs",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      exercisesGroup: [
        {
          name: "Single",
          exercises: [
            {
              key: "1",
              name: "Push Ups",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

              sets: "5",
              reps: "12/12/10",
              rest: 10,
              tempo: "1-2-1",
              image: back,
            },
            {
              key: "2",
              name: "Bench Press",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

              sets: "8",
              reps: "4/4/4",
              rest: 5,
              tempo: "2-3-2",
              image: back,
            },
          ],
        },
      ],
      tags: ["tag1", "tag2"],
      image: abs,
    },
    {
      key: "2",
      name: "Arms",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      exercisesGroup: [
        {
          name: "Single",
          exercises: [
            {
              key: "1",
              name: "Push Ups",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
              sets: "10",
              reps: "4/5/4",
              rest: 3,
              tempo: "2-1-2",
              image: back,
            },
            {
              key: "2",
              name: "Bench Press",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
              sets: "4",
              reps: "6/7/7",
              rest: 4,
              tempo: "2-2-2",
              image: back,
            },
          ],
        },
      ],
      tags: ["tag1", "tag3"],
      image: arms,
    },
    {
      key: "3",
      name: "Back",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      exercisesGroup: [
        {
          name: "Superset",
          exercises: [
            {
              key: "1",
              name: "Push Ups",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

              sets: "8",
              reps: "3/5/6",
              rest: 3,
              tempo: "3-2-1",
              image: back,
            },
            {
              key: "2",
              name: "Bench Press",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

              sets: "4",
              reps: "1/4/2",
              rest: 3,
              tempo: "1-2-2",
              image: back,
            },
          ],
          name: "Single",
          exercises: [
            {
              key: "3",
              name: "Pull Ups",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

              sets: "6",
              reps: "4/5/3/4",
              rest: 2,
              tempo: "2-2-1",
              image: back,
            },
          ],
        },
      ],

      tags: ["tag2", "tag3"],
      image: back,
    },
    {
      key: "4",
      name: "Chest",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      exercisesGroup: [
        {
          name: "Single",
          exercises: [
            {
              key: "1",
              name: "Push Ups",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
              sets: "10",
              reps: "3/4/3",
              rest: 3,
              tempo: "4-2-1",
              image: back,
            },
            {
              key: "3",
              name: "Pull Ups",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              sets: "4",
              reps: "5/6/7",
              rest: 5,
              tempo: "1-2-1",
              image: back,
            },
          ],
        },
      ],
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

      image: back,
    },
    {
      key: "2",
      name: "Bench Press",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

      image: back,
    },
    {
      key: "3",
      name: "Pull Ups",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi omnis ex recusandae quasi optio cumque quisquam id dicta dolor.",

      image: back,
    },
  ];

  const [workoutsData, setWorkoutsData] = useState(workoutData);
  const [exercisesData, setExercisesData] = useState(exerciseData);

  return (
    <DataContext.Provider
      value={{
        workoutsData,
        setWorkoutsData,
        exercisesData,
        setExercisesData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
