const Button = (props) => {
  const className =
    "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-1rem p-1 " + props.className;
  return (
    <>
      {/* <div>
        <button type="submit" className={className} onClick={props.onClick}>
          {props.buttonname}
        </button>
      </div> */}
      <div>
        <button className={className} onClick={props.onClick}>
          {props.buttonname}
        </button>
      </div>
    </>
  );
};
export default Button;
