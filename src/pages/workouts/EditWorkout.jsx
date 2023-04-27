import { Form, Input, Button } from "antd";
import { useLocation } from "react-router-dom";
export default function EditWorkout() {
  const [form] = Form.useForm();
  const location = useLocation();
  const { key, name, description, tags } = location.state;

  form.setFieldsValue({
    name,
    description,
    tags: tags.join(", "),
  });

  console.log(location.state);
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="bg-white p-8 shadow rounded lg:max-w-2xl xl:max-w-lg">
      <h2> Edit Workout {key} </h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          className="mb-6"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Workout name is required" }]}
        >
          <Input className="py-2" />
        </Form.Item>
        <Form.Item className="mb-6" label="Description" name="description">
          <Input.TextArea className="py-2" />
        </Form.Item>
        <Form.Item className="mb-6" label="Tags" name="tags">
          <Input className="py-2" />
        </Form.Item>
        <Form.Item className="mb-6">
          <Button type="primary" htmlType="submit" className="h-auto px-6 py-2">
            Update
          </Button>
          <Button
            htmlType="button"
            onClick={onReset}
            className="h-auto px-6 py-2 ml-4"
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
