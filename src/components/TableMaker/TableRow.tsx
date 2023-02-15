import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadData } from "../../store/modal/reducer";
import {
  createString,
  DataObject,
  filterProduct,
  Param,
} from "../../utils/TableMaker";

const TableRow = ({
  item,
  params_to_display,
  rowIdx,
}: {
  item: DataObject;
  params_to_display: Param[];
  rowIdx: number;
}) => {
  const [rowData, setRowData] = useState<DataObject>({});
  const dispatch = useAppDispatch();

  // filtering data to get values for only the required properties
  useEffect(() => {
    const filtered_product = filterProduct(item, params_to_display);
    setRowData(filtered_product);
  }, [item, params_to_display]);

  // show the entire product in the modal
  const openModal = () => {
    dispatch(loadData({ title: "Item Details", data: item }));
  };

  return (
    <tr onClick={openModal}>
      {Object.keys(rowData).map((key, keyIndex) => {
        return (
          <td key={rowIdx + "entry" + keyIndex}>
            {JSON.stringify(createString(rowData[key]))}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
