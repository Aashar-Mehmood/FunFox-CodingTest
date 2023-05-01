import { Card } from "antd";
export default function DashboardCard(props) {
  const { title, image, stats } = props;
  return (
    <Card title={title} bordered={false}>
      <div className="flex justify-between items-center">
        <img className="w-16 h-16" src={image} alt={title} />
        <h2 className="text-3xl my-0">{stats}</h2>
      </div>
    </Card>
  );
}
