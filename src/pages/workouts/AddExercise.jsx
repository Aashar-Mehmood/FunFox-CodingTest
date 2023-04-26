import { useParams } from "react-router-dom";
import { Form, Input } from "antd";
export default function AddExercise() {
  const { id } = useParams();
  const [form] = Form.useForm();
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2> Add Exercise to Workout {id} </h2>
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
    </div>
  );
}
