import { Routes, Route } from "react-router-dom";
import BmiFormMetric from "../Components/BMI-Calculator/BmiFormMetric";
import BmiFormUS from "../Components/BMI-Calculator/BmiFormUS";

const RoutesModule = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BmiFormMetric />} />
        <Route path="BMI/metric" element={<BmiFormMetric />} />
        <Route path="BMI/us" element={<BmiFormUS />} />
      </Routes>
    </>
  );
};
export default RoutesModule;
