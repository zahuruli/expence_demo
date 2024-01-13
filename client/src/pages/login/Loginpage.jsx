import React, { useEffect, useState } from "react";
import "./login.css";
import { Button, Checkbox, Form, Input, message } from "antd";
import Layout from "../../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "../../components/spinner/Spinner";

const LoginPage = () => {
  const url = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //prevent for login user:
  useEffect(() => {
    if (localStorage.getItem("user")) {
      return navigate("/");
    }
  }, [navigate]);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${url}/user/login`, values);
      if (data?.success) {
        setLoading(false);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...data.user, password: "" })
        );
        message.success("Login successfully");
        // toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error(data.message);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed", errorInfo);
  };

  return (
    <>
      <div className="login-page ">
        <h2 className="text-center mb-5 login_text">Login Page</h2>
        {loading && <Spinner />}
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            className="item"
          >
            <Input type="email" className="input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className="item"
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item>
            <div className=" button-div">
              <Link to={"/register"} className="link_text">
                not a user ? registered please{" "}
              </Link>
              <Button type="primary" htmlType="submit" className="m-2">
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
