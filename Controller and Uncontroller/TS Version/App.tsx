import { useState } from "react";
import { ControlledFlow } from "./components/controlled-flow";

interface StepProps {
  next: (data: any) => void;
}

const StepOne: React.FC<StepProps> = ({ next }) => (
  <>
    <h1>Step #1: Enter your name</h1>
    <button onClick={() => next({ name: "TestName" })}>Next</button>
  </>
);

const StepTwo: React.FC<StepProps> = ({ next }) => (
  <>
    <h1>Step #2: Enter your age</h1>
    <button onClick={() => next({ age: 30 })}>Next</button>
  </>
);

const StepThree: React.FC<StepProps> = ({ next }) => (
  <>
    <h1>Step #3: You qualify!</h1>
    <button onClick={() => next({})}>Next</button>
  </>
);

const StepFour: React.FC<StepProps> = ({ next }) => (
  <>
    <h1>Step #4: Enter your country</h1>
    <button onClick={() => next({ country: "Poland" })}>Next</button>
  </>
);

const App: React.FC = () => {
  const [data, setData] = useState<any>({});
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const next = (dataFromStep: any) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <ControlledFlow currentStepIndex={currentStepIndex} onNext={next}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
};

export default App;
