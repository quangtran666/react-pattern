import { createContext, useContext, ReactNode } from "react";

interface CardContextType {
  test: string;
}

const Context = createContext<CardContextType | null>(null);

interface CardProps {
  test: string;
  children: ReactNode;
}

interface SubComponentProps {
  children: ReactNode;
}

const Body = ({ children }: SubComponentProps) => (
  <div style={{ padding: ".5rem" }}>{children}</div>
);

const Header = ({ children }: SubComponentProps) => {
  const context = useContext(Context);
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      {children}
      {context?.test}
    </div>
  );
};

const Footer = ({ children }: SubComponentProps) => (
  <div
    style={{
      borderTop: "1px solid black",
      padding: ".5rem",
      marginTop: ".5rem",
    }}
  >
    {children}
  </div>
);

export const Card = ({ test, children }: CardProps) => {
  return (
    <Context.Provider value={{ test }}>
      <div style={{ border: "1px solid black" }}>{children}</div>
    </Context.Provider>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;