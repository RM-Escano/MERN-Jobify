import { FormRow, Logo, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, redirect, Link } from "react-router-dom";
import customFetch from "../util/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="POST" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow name="name" type="text" />
        <FormRow name="lastName" labelText="lastName" type="text" />
        <FormRow name="location" type="text" />
        <FormRow name="email" type="email" />
        <FormRow name="password" type="password" />

        <SubmitBtn formBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
