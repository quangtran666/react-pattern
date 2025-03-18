import React, { ReactNode } from "react";

interface ControlledFlowProps {
  children: ReactNode;
  onDone?: () => void;
  currentStepIndex: number;
  onNext: (data: any) => void;
}

export const ControlledFlow: React.FC<ControlledFlowProps> = ({
  children,
  onDone,
  currentStepIndex,
  onNext,
}) => {
  const next = (data: any) => {
    onNext(data);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { next });
  }

  return <>{currentChild}</>;
};
