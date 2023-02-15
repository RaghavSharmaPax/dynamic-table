import ApiSelector from "../../components/TableMaker/ApiSelector";
import AttrNaming from "../../components/TableMaker/AttrNaming";
import AttrSelector from "../../components/TableMaker/AttrSelector";
import TableCreator from "../../components/TableMaker/TableCreator";
import "./styles.css";

const TableMaker = () => {
  return (
    <div className="table_maker">
      <ApiSelector />
      <div className="table_maker__inputs">
        <AttrSelector />
        <AttrNaming />
      </div>
      <TableCreator />
    </div>
  );
};

export default TableMaker;
