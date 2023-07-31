import { Form, Modal, Input, Checkbox, message } from "antd";
import { useState } from "react";
import useFireStore from "../hooks/useFireStore";
import useAuth from "../hooks/useAuth";
export default function AddTaskModal(props) {
  const { createTask, getTasks } = useFireStore();
  const { open, setOpen } = props;
  const { user, groupId } = useAuth();
  const [isPublic, setIsPublic] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [form] = Form.useForm();
  const handleCreate = () => {
    form.validateFields().then((values) => {
      const { name, description } = values;
      const payload = {
        groupId,
        userId: user.uid,
        name,
        description,
        isPublic,
        isCompleted: false,
      };
      setIsCreatingTask(true);
      createTask(payload)
        .then((res) => {
          getTasks(groupId);
          setIsCreatingTask(false);
          messageApi.open({
            type: "success",
            content: "Task Created Successfully",
          });
          form.resetFields();
          setOpen(false);
        })
        .catch((err) => {
          setIsCreatingTask(false);
          messageApi.open({
            type: "error",
            content: err?.message ?? "Failed to Create Task",
          });
          form.resetFields();
          setOpen(false);
        });
    });
  };

  return (
    <Modal
      title="Create New Task"
      open={open}
      onOk={handleCreate}
      onCancel={() => setOpen(false)}
      okButtonProps={{
        className: "px-8 py-2 h-auto ml-8",
        "data-testid": "create button",
        loading: isCreatingTask,
      }}
      cancelButtonProps={{
        className: "px-6 py-2 h-auto ",
        "data-testid": "cancel button",
      }}
      okText="Create"
    >
      <Form form={form} layout="vertical">
        {contextHolder}
        <Form.Item
          className="mb-4"
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter task name" }]}
        >
          <Input className="py-2" data-testid="name" />
        </Form.Item>
        <Form.Item
          className="mb-4"
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter task description" }]}
        >
          <Input.TextArea className="py-2" data-testid="description" />
        </Form.Item>
        <Checkbox
          className="my-4"
          name="sendToAllUsers"
          onChange={(e) => setIsPublic(e.target.checked)}
        >
          Public to Group Members
        </Checkbox>
      </Form>
    </Modal>
  );
}
