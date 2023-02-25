import "./App.css";
import { useForm } from "react-hook-form";

const LoginForm = ({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  },
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="test@gmail.com"
        aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
        {...register("email", {
          required: "must input email here",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "does not meet the email requirements",
          },
        })}
      />

      {errors.email && <small role="alert">{errors.email.message}</small>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="???"
        aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
        {...register("password", {
          required: "need password essentially",
          minLength: {
            value: 8,
            message: "must input password more than 8 characters",
          },
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <button type="submit" disabled={isSubmitting}>
        Log in
      </button>
    </form>
  );
};
export default LoginForm;
