import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { MailOutlined, UnlockOutlined } from "@ant-design/icons";
import "./RegisterForm.scss";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    email: "",
    pasword: "",
    repeatPassword: "",
    privacyPolicy: false
  });

  const changeForm = e => {
    console.log(e.target.value);
  };

  return (
    <Form className="register-form" onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UnlockOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="password"
          placeholder="Contrasenia"
          className="register-form__input"
          value={inputs.pasword}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UnlockOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contrasenia"
          className="register-form__input"
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
          He leido y acepto la politica de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
