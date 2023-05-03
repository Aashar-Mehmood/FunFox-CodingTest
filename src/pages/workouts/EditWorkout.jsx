import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import useData from "../../hooks/useData";
import { useEffect } from "react";
export default function EditWorkout() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { key, name, description, tags } = location?.state;
  const { workouts, setWorkouts } = useData();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.setFieldsValue({
      name,
      description,
      tags,
    });
  }, []);

  const onFinish = (values) => {
    const updatedWorkout = {
      key,
      ...values,
    };
    setWorkouts((prevWorkouts) => {
      return prevWorkouts.map((workout) => {
        if (workout.key === key) {
          return {
            ...updatedWorkout,
          };
        } else {
          return workout;
        }
      });
    });
    messageApi.open({
      type: "success",
      content: "Workout updated",
      onClose: () => navigate("/workouts"),
    });
  };

  return (
    <div className="bg-white p-8 shadow rounded lg:max-w-2xl xl:max-w-lg">
      <>{contextHolder}</>
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
        <Form.Item className="mb-6" label="Image" name="image">
          <Upload accept="image/*" maxCount={1}>
            <Button className="py-2 h-auto" icon={<UploadOutlined />}>
              Choose New Image
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item className="mt-10 mb-6">
          <Button type="primary" htmlType="submit" className="h-auto px-6 py-2">
            Update
          </Button>
          <Button
            htmlType="button"
            onClick={() => form.resetFields()}
            className="h-auto px-6 py-2 ml-4"
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
