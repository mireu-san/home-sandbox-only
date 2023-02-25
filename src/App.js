import "./App.css";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formStat: { isSubmitting },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      })}
    >
      <label htmlFor="id">ID</label>
      <input
        id="id"
        type="id"
        name="id"
        placeholder="input your ID"
        {...register("email")}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder=""
        {...register("password")}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

function App() {
  return <div className="App">test</div>;
}

export default LoginForm;
