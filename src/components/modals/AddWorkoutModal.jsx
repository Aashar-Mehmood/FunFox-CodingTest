import { Button, Modal, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import useData from "../../hooks/useData";
export default function AddWorkoutModal(props) {
  const { open, setOpen } = props;
  const [form] = Form.useForm();
  const { workouts, setWorkouts } = useData();
  const handleCreate = () => {
    form.validateFields().then((values) => {
      const newWorkout = {
        key: Date.now(),
        ...values,
      };
      setWorkouts([...workouts, newWorkout]);
      form.resetFields();
      setOpen(false);
    });
  };
  return (
    <Modal
      title="Create New Workout"
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
      <Form form={form} layout="vertical" className="my-4">
        <Form.Item
          className="mb-6"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter workout name" }]}
        >
          <Input className="py-2" />
        </Form.Item>
        <Form.Item className="mb-6" label="Description" name="description">
          <Input.TextArea className="py-2" />
        </Form.Item>
        <Form.Item className="mb-6" label="Comma Separated Tags" name="tags">
          <Input className="py-2" placeholder="Tag1, Tag2, Tag3" />
        </Form.Item>
        <Form.Item className="mb-6" label="Image" name="image">
          <Upload accept="image/*" maxCount={1}>
            <Button className="py-2 h-auto" icon={<UploadOutlined />}>
              Upload Workout Image
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}
