import React from "react";

export const UncontrolledForm: React.FC = () => {
  const nameInputRef = React.createRef<HTMLInputElement>();
  const ageInputRef = React.createRef<HTMLInputElement>();

  const SubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(ageInputRef.current?.value);
  };

  return (
    <form onSubmit={SubmitForm}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};
