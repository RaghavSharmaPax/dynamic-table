import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addSelectedAttribute,
  removeSelectedAttribute,
} from "../../store/table/reducer";
import Checkbox from "../core/Checkbox";

const AttrSelector = () => {
  // getting all the attributes
  const attributes = useAppSelector((state) => state.table.attributes);

  const dispatch = useAppDispatch();

  // storing the checked attributes
  const updateSelectedAttrs = (checked: boolean, label: string) => {
    if (checked) {
      dispatch(addSelectedAttribute(label));
    } else {
      dispatch(removeSelectedAttribute(label));
    }
  };

  return (
    <div className="attr_selector">
      {attributes.map((attr, idx) => (
        <Checkbox
          key={idx}
          label={attr}
          onChange={(e: any) => updateSelectedAttrs(e.target.checked, attr)}
        />
      ))}
    </div>
  );
};

export default AttrSelector;
