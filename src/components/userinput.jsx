import { useState } from "react";
export default function UserInput({ onChange, formData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            value={formData.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={formData.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={formData.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={formData.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
