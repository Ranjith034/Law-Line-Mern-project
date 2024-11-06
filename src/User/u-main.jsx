import React, { useState } from "react";

function Umain() {
  const [activeComponent, setActiveComponent] = useState("ComponentA");

  const showComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="n-tool">
      <button onClick={() => showComponent("ComponentA")}>Show Component A</button>
      <button onClick={() => showComponent("ComponentB")}>Show Component B</button>
      <button onClick={() => showComponent("ComponentC")}>Show Component C</button>
      <button onClick={() => showComponent("ComponentD")}>Show Component D</button>

      <div style={{ marginTop: "20px" }}>
        {activeComponent === "ComponentA" && <ComponentA />}
        {activeComponent === "ComponentB" && <ComponentB />}
        {activeComponent === "ComponentC" && <ComponentC />}
        {activeComponent === "ComponentD" && <ComponentD />}
      </div>
    </div>
  );
}

function ComponentA() {
  return <div>This is Component A</div>;
}

function ComponentB() {
  return <div>This is Component B</div>;
}

function ComponentC() {
  return <div>This is Component C</div>;
}

function ComponentD() {
  return <div>This is Component D</div>;
}

export default Umain;
