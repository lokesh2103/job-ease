import React, { useState } from "react";
import "./ListItem.scss";
import logo from "./../../../../assets/logo.jpg";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowUp } from "@mui/icons-material";

const steps = [
  {
    name: "Applied",
    key: 0,
  },
  {
    name: "Screen",
    key: 1,
  },
  {
    name: "Interview",
    key: 3,
  },
  {
    name: "Offer",
    key: 4,
  },
];

const ListItem = () => {
  const [accordianButton, setAccordianButton] = useState(false);

  return (
    <div className="applicationContainer">
      <div className="applicationInfo commonStyle">
        <div className="companyLogo">
          <img src={logo} />
        </div>
        <div className="jobInfo">
          <h4>Full Stack Engineer</h4>
          <p>Project Leaders Ltd</p>
          <p>Mumbai, Maharashtra</p>
        </div>
      </div>
      <div className="applicationStatusDiv commonStyle">
        <div className="applicationStatus">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={2} alternativeLabel>
              {steps.map((label) => (
                <Step key={label.key}>
                  <StepLabel>{label.name}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <div className="accordianButton">
          {accordianButton ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
