import { Button, Form, Modal, Input, InputNumber, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import useData from "../../hooks/useData";

export default function AddExerciseModal(props) {
  const { open, setOpen } = props;
  const { exercisesData, setExercisesData } = useData();
  const [form] = Form.useForm();
  const handleCreate = () => {
    form.validateFields().then((values) => {
      console.log(values);
      const newExercise = {
        key: Date.now(),
        ...values,
      };
      setExercisesData([...exercisesData, newExercise]);

      form.resetFields();
      setOpen(false);
    });
  };

  return (
    <Modal
      data-testid="new exercise modal"
      title="Create New Exercise"
      open={open}
      onOk={handleCreate}
      onCancel={() => {
        form.resetFields();
        setOpen(false);
      }}
      okButtonProps={{
        className: "px-8 py-2 h-auto ml-8",
        "data-testid": "create button",
      }}
      cancelButtonProps={{
        className: "px-6 py-2 h-auto ",
        "data-testid": "cancel button",
      }}
      okText="Create"
    >
      <Form form={form} layout="vertical" data-testid="add exercise form">
        <Form.Item
          className="mb-4"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter exercise name" }]}
        >
          <Input className="py-2" data-testid="name" />
        </Form.Item>
        <Form.Item className="mb-4" label="Description" name="description">
          <Input.TextArea className="py-2" data-testid="description" />
        </Form.Item>

        <Form.Item
          className="mb-8"
          label="Image"
          name="image"
          valuePropName="fileList"
        >
          <Upload accept="image/*" maxCount={1} data-testid="image">
            <Button className="py-2 h-auto" icon={<UploadOutlined />}>
              Upload Exercise Image
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}
