import { message } from "antd";

const [messageApi, contextHolder] = message.useMessage(() => contextHolder);
const MessageBox = () => {
  messageApi.open({
    type: "success",
    content: "This is a success message",
  });
};

export { MessageBox };
