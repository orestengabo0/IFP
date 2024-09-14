import React, { useState } from "react";

const YearDropdown = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2020 }, (v, k) => 2021 + k);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
    console.log("Selected Year:", e.target.value); // You can use this value for further logic
  };

  return (
    <div className="d-flex justify-content-between mb-3">
      <h4 className="mt-1">Sponsored Money</h4>
      <select
        className="border border-success border-2 rounded-5 outline-0"
        value={selectedYear || ""}
        onChange={handleYearChange}
        style={{padding: "10px"}}
      >
        <option value="" disabled>Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearDropdown;
