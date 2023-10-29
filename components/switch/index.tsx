import { ChangeEvent } from "react";
import classes from "./index.module.css";

const Switch = (props) => {
  const handleChanged = (evt: ChangeEvent<HTMLInputElement>) => {
    const checked = evt.target.checked;
    console.log(checked);

    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="relative inline-block w-10 mr-2 ml-6 mt-6 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className={classes["toggle-checkbox"]}
          onChange={handleChanged}
        />
        <label htmlFor="toggle" className={classes["toggle-label"]}></label>
      </div>
    </>
  );
};

export default Switch;
