import React, { useState, useCallback } from "react";

const SkillList = React.memo(({ skills }) => {
  console.log("SkillList rendered");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

function ReactMemo() {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const addSkill = useCallback(() => {
    if (inputValue.length <= 3) {
      setError("Input must be more than 3 characters.");
      return;
    }
    setSkills((prev) => [...prev, inputValue]);
    setInputValue("");
    setError("");
  }, [inputValue]);

  return (
    <div>
      <h2>React.memo</h2>
      <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: "4px 8px", fontSize: "14px" }}
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>
      {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}
      <SkillList skills={skills} />
    </div>
  );
}

export default ReactMemo;