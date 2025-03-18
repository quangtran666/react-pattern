import React, { useState, ReactNode } from "react";

interface UncontrolledFlowProps {
  children: ReactNode;
  onDone: (data: any) => void;
}

export const UncontrolledFlow: React.FC<UncontrolledFlowProps> = ({
  children,
  onDone,
}) => {
  const [data, setData] = useState<any>({});
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  const next = (dataFromStep: any) => {
    const nextIndex = currentStepIndex + 1;
    const updatedData = { ...data, ...dataFromStep };

    console.log(updatedData);

    if (nextIndex < React.Children.count(children)) {
      setCurrentStepIndex(nextIndex);
    } else {
      onDone(updatedData);
    }

    setData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next });
  }

  return <>{currentChild}</>;
};
