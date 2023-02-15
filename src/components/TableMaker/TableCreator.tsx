import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { Param } from "../../utils/TableMaker";
import TableRow from "./TableRow";

const TableCreator = () => {
  const selectedAttributes = useAppSelector(
    (state) => state.table.selectedAttributes
  );
  const data = useAppSelector((state) => state.api.data);

  const [namedParams, setNamedParams] = useState<Param[]>([]);

  // filtering for those attributes that have been named
  useEffect(() => {
    const table_params = selectedAttributes.filter((param) => !!param.title);
    setNamedParams(table_params);
  }, [selectedAttributes]);

  return (
    <div className="table_container">
      <table className="product_table">
        <thead>
          <tr>
            {namedParams.map(({ attr, title }, index) => (
              <th key={"title" + index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataObj, index) => (
            <TableRow
              key={"tr" + index}
              item={dataObj}
              params_to_display={namedParams}
              rowIdx={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCreator;
