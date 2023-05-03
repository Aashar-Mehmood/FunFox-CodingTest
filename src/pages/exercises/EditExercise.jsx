import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, InputNumber, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import { useEffect } from "react";
export default function EditExercise() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { exercises, setExercises } = useData();
  const { key, name, description, workoutName, sets, reps, time } =
    location.state;
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.setFieldsValue({
      name,
      description,
      sets,
      reps,
      time,
    });
  }, []);

  const onFinish = (values) => {
    const updatedExercise = {
      key,
      workoutName,
      ...values,
    };
    setExercises((prevExercises) => {
      return prevExercises.map((exercise) => {
        if (exercise.key === key) {
          return {
            ...updatedExercise,
          };
        } else {
          return exercise;
        }
      });
    });
    messageApi.open({
      type: "success",
      content: "Exercise updated",
      onClose: () => navigate("/exercises"),
    });
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="bg-white p-8 shadow rounded lg:max-w-2xl xl:max-w-lg">
      {contextHolder}
      <h2> Edit Exercise {name} </h2>
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
              Upload New Image
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
