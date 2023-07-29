import { Col, Row, Table, Tag } from "antd";
import dumbel from "../../assets/dumbbell.png";
import runner from "../../assets/runner.png";
import user from "../../assets/profile.png";
import useData from "../../hooks/useData";
import DashboardCard from "../../components/cards/DashboardCard";
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
];
export default function Dashbaord() {
  // useEffect to fetch general stats and latest exercises
  // then setStats and setExercisesDataDataData to response
  const { workoutsData, exercisesData } = useData();

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
          {tags?.map((tag) => {
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
  ];

  return (
    <>
      <h2 className="text-2xl mt-0">General Statistics</h2>
      <Row gutter={16}>
        <Col span={8}>
          <DashboardCard title="Total Workouts" image={dumbel} stats="20" />
        </Col>
        <Col span={8}>
          <DashboardCard title="Total Exercises" image={runner} stats="50" />
        </Col>
        <Col span={8}>
          <DashboardCard title="Total Users" image={user} stats="100" />
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
          dataSource={workoutsData}
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
          dataSource={exercisesData}
        />
      </div>
    </>
  );
}
