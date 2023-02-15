import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateAttrTitle } from "../../store/table/reducer";
import TitleInput from "../core/TitleInput";

const AttrNaming = () => {
  const dispatch = useAppDispatch();
  // getting only selected attributes
  const selectedAttrs = useAppSelector(
    (state) => state.table.selectedAttributes
  );

  // adding the new titles for the attributes
  const addTitle = (title: string, index: number) => {
    dispatch(updateAttrTitle({ index, title }));
  };

  return (
    <div className="attr_naming">
      {selectedAttrs.map(({ attr, title }, index) => (
        <TitleInput
          key={attr + index}
          label={attr}
          onChange={(e) => addTitle(e.target.value, index)}
        />
      ))}
    </div>
  );
};

export default AttrNaming;
