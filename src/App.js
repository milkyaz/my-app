import React, { useState } from "react";
import { EuiFieldPassword, EuiSwitch } from "@elastic/eui";
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";

function App() {
  const [value, setValue] = useState("");
  const [dual, setDual] = useState(true);
  const buttons = [
    "primary",
    "success",
    "warning",
    "danger",
    "text",
    "accent",
    "disabled",
  ];
  return (
    <div className="password__change">
      <div className="password__one">
        <h3 className="password__text">New Password</h3>
        <EuiFieldPassword
          className="password__change"
          placeholder="Enter the password"
          type={dual ? "dual" : undefined}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Use aria labels when no actual label is in use"
        />
      </div>
      <div className="password__first">
        <h3 className="password__text">Confirm Password</h3>
        <EuiFieldPassword
          className="password__change"
          placeholder="Duplicate the password"
          type={dual ? "dual" : undefined}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Use aria labels when no actual label is in use"
        />
      </div>
      <EuiButton color="text" minWidth={254}>
        Change Password
      </EuiButton>
    </div>
  );
}

export default App;
