import React, { useEffect, useState } from "react";
import "./registration.css";
import { Button, Checkbox, Form, Input, message } from "antd";
import Layout from "../../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "../../components/spinner/Spinner";

const RegistrationPage = () => {
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
      const { data } = await axios.post(`${url}/user/register`, values);
      if (data?.success) {
        toast.success(data.message);
        setLoading(false);
        navigate("/login");
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
      <div className="register-page ">
        <h2 className="text-center mb-5 login_text">Registration Page</h2>
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
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your username!",
              },
            ]}
            className="item"
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please inter your email!",
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
                message: "Please enter your password!",
              },
            ]}
            className="item"
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item>
            <div className=" button-div">
              <Link to={"/login"} className="link_text">
                Already registered? please login
              </Link>
              <Button type="primary" htmlType="submit">
                REGISTER
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegistrationPage;
