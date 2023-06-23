import { useState } from "react";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";
const BmiFormMetric = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiData, setBmiData] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");
  const [colorStatus, setColorStatus] = useState("");

  const onChangeHeightHandler = (event) => {
    setHeight(event.target.value);
  };
  const onChangeWeightHandler = (event) => {
    setWeight(event.target.value);
  };
  const onClickClearHandler = () => {
    setHeight("");
    setWeight("");
    setBmiData("");
    setBmiStatus("");
    setColorStatus("");
  };
  const onClickSubmitHandler = () => {
    if (height && weight) {
      let bmi = weight / (height / 100) ** 2;
      bmi = Math.trunc(bmi * 10) / 10;

      let bmiStats = "";
      if (bmi < 18.5) {
        bmiStats = "Underweight";
        setColorStatus("text-rose-600");
      } else if (bmi > 18.5 && bmi < 25) {
        bmiStats = "Healthy weight";
        setColorStatus("text-green-600");
      } else if (bmi >= 25 && bmi < 30) {
        bmiStats = "Overweight";
        setColorStatus("text-yellow-600");
      } else {
        bmiStats = "Obesity";
        setColorStatus("text-rose-600");
      }
      setHeight("");
      setWeight("");
      setBmiStatus(bmiStats);
      setBmiData(bmi);
    }
  };
  return (
    <>
      <header>
        <div className=" text-center">
          <p className="font-bold text-4xl font-serif tracking-wide mt-2 mb-2 p-2 text-red-900">
            BMI Calculator
          </p>
          <p className=" text-white bg-neutral-600 hover:bg-neutral-400  hover:text-black hover:font-bold hover:tracking-wide p-2 mt-5 font-mono w-auto ">
            Body Mass Index
          </p>
        </div>
      </header>
      <div className="border-solid border-2 border-indigo-600 m-5 p-9 flex flex-col justify-evenly md:flex-row md:justify-evenly">
        {/* BMI Calculator Form */}
        <div className="border-2 border-black p-5">
          <div className="flex justify-center items-center mb-2">
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
              <li className="menu-active">
                <Link to={"/BMI/metric"}>Metric Units</Link>
              </li>
              <li>
                <Link to={"/BMI/us"}>US Units</Link>
              </li>
            </ul>
            {/* <Link to={"/BMI"} className="mx-2">
              Metric Units
            </Link>
            <Link to={"/BMI/us"} className="mx-5">
              US Units
            </Link> */}
          </div>
          <div className="flex justify-center items-center">
            <Input
              type="number"
              placeholder="height (in cm) "
              label="Height"
              className="mt-3"
              onChange={onChangeHeightHandler}
              value={height}
            />
          </div>
          <div className="flex justify-center items-center">
            <Input
              type="number"
              placeholder="weight (in kg) "
              label="Weight"
              className=" mt-3"
              onChange={onChangeWeightHandler}
              value={weight}
            />
          </div>
          <div className="flex justify-center items-center">
            <Button
              buttonname="Calculate"
              className=" bg-green-500 hover:bg-green-600 hover:text-white"
              onClick={onClickSubmitHandler}
            />
            <Button
              buttonname="Clear"
              className=" bg-gray-400 hover:bg-gray-500 hover:text-white"
              onClick={onClickClearHandler}
            />
          </div>
        </div>
        {/* BMI Result Show */}
        <div className="border border-dashed border-black p-5 m-2">
          <div className=" text-center font-serif font-medium text-3xl p-3 w-auto text-violet-900 bg-purple-200">
            Result
          </div>

          <div className="text-center p-10">
            {bmiData ? (
              <div className="flex flex-col justify-around items-center">
                <p className=" text-cyan-700 my-2 text-xl">Your BMI:-</p>
                <span
                  className={`border-2 ${colorStatus} rounded-full p-4 font-mono font-bold text-4xl`}
                >
                  {bmiData}
                </span>
                <p
                  className={`${colorStatus} text-3xl font-semibold my-8 font-serif tracking-wide`}
                >
                  {bmiStatus}
                </p>
              </div>
            ) : (
              <p className="mt-4">Want to calculate BMI ? Enter Data</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default BmiFormMetric;
