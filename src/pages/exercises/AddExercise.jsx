import { useParams } from "react-router-dom";
import { Form, Input, InputNumber, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
export default function AddExercise() {
  const { id } = useParams();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="bg-white p-8 shadow rounded lg:max-w-2xl xl:max-w-lg">
      <h2> Add Exercise to Workout {id} </h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          className="mb-6"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter exercise name" }]}
        >
          <Input className="py-2" />
        </Form.Item>
        <Form.Item className="mb-6" label="Description" name="description">
          <Input.TextArea className="py-2" />
        </Form.Item>
        <div className="flex justify-between mb-6">
          <Form.Item className="mb-0" label="Sets" name="sets">
            <InputNumber min={1} className="py-1" />
          </Form.Item>
          <Form.Item className="mb-0" label="Reps" name="reps">
            <InputNumber min={1} className="py-1" />
          </Form.Item>
          <Form.Item className="mb-0" label="Time (mins)" name="time">
            <InputNumber min={1} className="py-1" />
          </Form.Item>
        </div>
        <Form.Item className="mb-10" label="Image" name="image">
          <Upload accept="image/*" maxCount={1}>
            <Button className="py-2 h-auto" icon={<UploadOutlined />}>
              Upload Exercise Image
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item className="mb-6">
          <Button type="primary" htmlType="submit" className="h-auto px-6 py-2">
            Submit
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