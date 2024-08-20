import Header from "./components/header.jsx";
import UserInput from "./components/userinput.jsx";
import Results from "./components/results.jsx";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = formData.duration >= 1;

  const handleChange = (inputType, newValue) => {
    setFormData((prevInput) => {
      return {
        ...formData,
        [inputType]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} formData={formData} />
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
      {inputIsValid && <Results data={formData} />}
    </>
  );
}

export default App;
