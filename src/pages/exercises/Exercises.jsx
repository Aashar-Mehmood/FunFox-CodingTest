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
  const { exercisesData, setExercisesData } = useData();
  const [open, setOpen] = useState(false);

  const confirmDelete = (key) => {
    setExercisesData(exercisesData.filter((item) => item.key !== key));
  };

  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
          className="py-2 h-auto"
        >
          New Exercise
        </Button>
      </div>
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
          dataSource={exercisesData}
        />
      </div>
      <AddExerciseModal open={open} setOpen={setOpen} />
    </>
  );
}
