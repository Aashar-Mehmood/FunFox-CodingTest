import { Form, Modal, Input, Checkbox, message } from "antd";
import { useState } from "react";
import useFireStore from "../hooks/useFireStore";
import useAuth from "../hooks/useAuth";
export default function EditTaskModal(props) {
  const { updateTask, getTasks } = useFireStore();
  const { id, name, description, isPublic, open, setOpen } = props;
  const { user } = useAuth();
  const [newIsPublic, setNewIsPublic] = useState(isPublic);
  const [messageApi, contextHolder] = message.useMessage();
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [form] = Form.useForm();

  form.setFieldsValue({
    name,
    description,
  });

  const handleCreate = () => {
    form.validateFields().then((values) => {
      const { name, description } = values;
      const payload = {
        name,
        description,
        isPublic: newIsPublic,
      };
      setIsCreatingTask(true);
      updateTask(id, payload)
        .then((res) => {
          getTasks(localStorage.getItem("userGroupId"));
          setIsCreatingTask(false);
          messageApi.open({
            type: "success",
            content: "Task Updated Successfully",
          });
          form.resetFields();
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
          setIsCreatingTask(false);
          messageApi.open({
            type: "error",
            content: err?.message ?? "Failed to Update Task",
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
      okText="Update"
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
          onChange={(e) => setNewIsPublic(e.target.checked)}
          checked={newIsPublic}
        >
          Public to Group Members
        </Checkbox>
      </Form>
    </Modal>
  );
}
