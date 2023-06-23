const Input = (props) => {
  const className = "input input-bordered w-full max-w-xs " + props.className;
  return (
    <>
      {/* <div className="m-4">
        {props.label && <label>{props.label}: </label>}
        <input
          className={className}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div> */}
      {/*input input-bordered w-full max-w-xs*/}
      <div className="form-control w-full max-w-xs">
        {props.label && (
          <label className="label">
            <span className="label-text">{props.label}: </span>
          </label>
        )}
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={className}
          value={props.value}
          onChange={props.onChange}
        />
      </div>

      {/* <div className="form-control">
        <label className="input-group">
          {props.label && <span>{props.label}</span>}
          <input
            type={props.type}
            placeholder={props.placeholder}
            className={className}
            value={props.value}
            onChange={props.onChange}
          />
        </label>
      </div> */}
    </>
  );
};
export default Input;
