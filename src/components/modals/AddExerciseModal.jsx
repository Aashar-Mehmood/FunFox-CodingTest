import { Button, Form, Modal, Input, InputNumber, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import useData from "../../hooks/useData";

export default function AddExerciseModal(props) {
  const { open, setOpen } = props;
  const { exercises, setExercises, workouts } = useData();
  const [form] = Form.useForm();
  const handleCreate = () => {
    form.validateFields().then((values) => {
      console.log(values);
      const newExercise = {
        key: Date.now(),
        ...values,
      };
      setExercises([...exercises, newExercise]);
      console.log(exercises);
      form.resetFields();
      setOpen(false);
    });
  };

  return (
    <Modal
      title="Create New Exercise"
      open={open}
      onOk={handleCreate}
      onCancel={() => {
        form.resetFields();
        setOpen(false);
      }}
      okButtonProps={{ className: "px-8 py-2 h-auto ml-8" }}
      cancelButtonProps={{ className: "px-6 py-2 h-auto " }}
      okText="Create"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          className="mb-4"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter exercise name" }]}
        >
          <Input className="py-2" />
        </Form.Item>
        <Form.Item className="mb-4" label="Description" name="description">
          <Input.TextArea className="py-2" />
        </Form.Item>
        <Form.Item className="mb-4" label="Workout" name="workoutName">
          <Select
            placeholder="Select a workout"
            options={workouts.map((workout) => {
              return {
                label: workout.name,
                key: workout.key,
                value: workout.name,
              };
            })}
          />
        </Form.Item>
        <div className="flex justify-between mb-4">
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
        <Form.Item className="mb-8" label="Image" name="image">
          <Upload accept="image/*" maxCount={1}>
            <Button className="py-2 h-auto" icon={<UploadOutlined />}>
              Upload Exercise Image
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}
