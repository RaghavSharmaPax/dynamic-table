import { useState } from "react";
import { getData } from "../../store/api/actions";
import { useAppDispatch } from "../../store/hooks";
import { initializeAttributes } from "../../store/table/reducer";
import Button from "../core/Button";

const ApiSelector = () => {
  const [apiEndpoint, setApiEndpoint] = useState("");
  const dispatch = useAppDispatch();

  // fetching and storing the data
  const fetchData = async () => {
    const res = await dispatch(getData(apiEndpoint));
    dispatch(initializeAttributes(res.payload));
  };

  const handleChange = (e: any) => {
    setApiEndpoint(e.target.value);
  };

  const clearInput = () => setApiEndpoint("");

  const submitApi = async (e: any) => {
    e.preventDefault();
    await fetchData();
    clearInput();
  };

  return (
    <form className="api_selector">
      <input
        className="api_selector__input"
        type="url"
        placeholder="Enter API endpoint"
        value={apiEndpoint}
        onChange={handleChange}
      />
      <Button text="Fetch" type="submit" onClick={submitApi} />
    </form>
  );
};

export default ApiSelector;
