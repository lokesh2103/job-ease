import React from "react";
import "./AccordianForm.scss";
import steps from "../../../../constants/ApplicationStatus";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AccordianForm = () => {
  return (
    <div>
      <div className="fields">
        <div className="fieldsGroup1">
          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            size="small"
            className="filter"
          >
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={status}
              label="Status"
              // onChange={handleChange}
            >
              {steps.map((item, index) => (
                <MenuItem key={index} value={item.name.toLowerCase()}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="fieldsGroup2"></div>
      </div>
      <div className="buttonsContainer">
        <div className="buttons"></div>
      </div>
    </div>
  );
};

export default AccordianForm;
