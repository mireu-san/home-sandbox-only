import "./App.css";
import useForm from "react-hook-form";

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="id">ID</label>
      <input id="id" type="id" name="id" placeholder="input your ID" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" placeholder="" />
      <button type="submit">Log in</button>
    </form>
  );
};

function App() {
  return <div className="App">test</div>;
}

export default App;
