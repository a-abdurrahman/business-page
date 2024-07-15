import TextArea from "antd/es/input/TextArea";
import CustomInput from "../components/CustomInput";
import { Button, Form, Input, Upload } from "antd";
import { HiOutlinePlus } from "react-icons/hi2";

export default function FeedbackPage() {
  return (
    <div className="px-10 py-14 flex grow lg:h-screen h-[95vh]">
      <Form
        layout="vertical"
        className="flex grow flex-col px-5 py-7 bg-white rounded-lg"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Photo"
          name="photo"
          rules={[
            {
              required: true,
              message: "Please input your photo!",
            },
          ]}
        >
          <Upload listType="picture-card">
            <button style={{ border: 0, background: "none" }} type="button" className="flex flex-col justify-center items-center max-h-10">
              <HiOutlinePlus size={20}/>
              Upload
            </button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Feedback"
          name="feedback"
          rules={[
            {
              required: true,
              message: "Please input your feedback!",
            },
          ]}
          className=""
        >
          <TextArea className="" rows={5} />
        </Form.Item>
        <Button type="primary" htmlType="submit" className=" w-fit self-end">
          Submit
        </Button>
      </Form>
    </div>
  );
}
{
  /*
    <form
        action=""
        className="h-full bg-white px-5 py-7 flex flex-col grow space-y-5 rounded-lg"
      >
        <CustomInput label={"Your Name"} type={"text"} />
        <CustomInput label={"Your Email"} type={"email"} />
        <div className="gap-2 flex flex-col" id="imagediv">
          <label htmlFor="image">Your Tea Photo</label>

          <input
            type="file"
            name="myImage"
            id="image"
            accept="image/*"
            className=" file:rounded-md bg-[#f8f8f8] file:p-2 file:border-none border-l "
          /> 
        </div>
        <div className="flex flex-col grow gap-2">
          <label htmlFor="complaints">Feedback</label>
          <input
            type="text"
            id="complaints"
            className="flex grow border-2 rounded-lg bg-[#f8f8f8]"
          />
        </div>
        <div className="flex flex-row justify-end">
          <button className="h-10 bg-sky-400 border-2 p-5 rounded-md flex items-center text-white">
            Submit
          </button>
        </div>
      </form>
    */
}
