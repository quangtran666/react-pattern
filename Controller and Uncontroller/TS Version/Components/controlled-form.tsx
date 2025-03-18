import { useEffect, useState } from "react";

export const ControlledForm: React.FC = () => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | undefined>();

  useEffect(() => {
    if (name.length < 1) {
      setError("The name cannot be empty");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age ?? ""}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
