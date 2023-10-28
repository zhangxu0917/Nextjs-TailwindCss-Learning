interface IProps {
  title: string;
  cssProperties: { label: string; value: string }[];
}

const CssPropertyList = (props: IProps) => {
  return (
    <div>
      <h4 className="mb-2">{props.title}</h4>
      <ul className="text-slate-600 table">
        {/* <li className="table-header-group">
          <div className="table-row">
            <span className="table-cell">ClassName</span>
            <span className="table-cell">CSS Style</span>
          </div>
        </li> */}
        {props.cssProperties.map((item) => (
          <li key={item.label} className="table-row">
            <span className="w-40 table-cell">{item.label}</span>
            <span className="table-cell">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CssPropertyList;
