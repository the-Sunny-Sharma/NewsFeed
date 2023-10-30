import { useFormik } from "formik";

export default function FormikForm() {
  const initialValues = { username: "" };

  const validate = (values) => {
    const error = {};
    if (!values.username) error.username = "username cannot be empty";
    else if (values.username.length < 5)
      error.username = "length of username should atleast be 5";
    else if (/\s/.test(values.username))
      error.username = "Username cannot contain spaces";
    return error;
  };
  const onSubmit = (values) => {
    let n = values.username;
    alert("Your username is :" + n);
  };
  const formik = useFormik({ initialValues, validate, onSubmit });
  return (
    <>
      <h2>Use formik for validation.</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Create a username"
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <p className="err">{formik.errors.username}</p>
        ) : null}
        <input type="submit" />
      </form>
    </>
  );
}
