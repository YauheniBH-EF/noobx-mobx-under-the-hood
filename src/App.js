import "./styles.css";
import user from "./store/user";
import { ObserverReact } from "./store/lib/ReactNoobx";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox, {user.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        value={user.name}
        onChange={(e) => {
          user.setName(e.target.value);
        }}
      />
    </div>
  );
};

export default ObserverReact(App);
