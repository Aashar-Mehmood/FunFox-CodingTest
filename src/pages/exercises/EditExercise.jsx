import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, InputNumber, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import useData from "../../hooks/useData";
import { useEffect } from "react";
export default function EditExercise() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { exercisesData, setExercisesData } = useData();
  const { key, name, description, sets, reps, time, image } = location.state;
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.setFieldsValue({
      name,
      description,
    });
  }, []);

  const onFinish = (values) => {
    const updatedExercise = {
      key,
      image,
      ...values,
    };
    setExercisesData((prevExercises) => {
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

        <div className="flex items-center mb-10">
          <Form.Item className="" label="Image">
            <Upload accept="image/*" maxCount={1}>
              <Button className="py-2 h-auto" icon={<UploadOutlined />}>
                {image ? "Choose New Image" : "Choose Image"}
              </Button>
            </Upload>
          </Form.Item>
          {image && (
            <>
              <span className="ml-20 mr-2">Old Image </span>
              <img src={image} alt="old Image" className="h-8" />
            </>
          )}
        </div>
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
