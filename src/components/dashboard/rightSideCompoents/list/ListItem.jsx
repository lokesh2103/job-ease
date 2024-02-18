import React, { useState } from "react";
import "./ListItem.scss";
import logo from "./../../../../assets/logo.jpg";
import { Box, Card, Step, StepLabel, Stepper } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { KeyboardArrowUp } from "@mui/icons-material";
import AccordianForm from "./AccordianForm";
import steps from "../../../../constants/ApplicationStatus";

const ListItem = (props) => {
  const [accordianButton, setAccordianButton] = useState(false);
  console.log("props:", props);
  const { Role, Location, Company, id } = props.item;
  const { handleAccordianClick, accordianIndex } = props;

  return (
    <Card elevation={1} className="card">
      <div
        className="applicationContainer"
        onClick={() => handleAccordianClick(id)}
      >
        <div className="applicationInfo commonStyle">
          <div className="companyLogo">
            <img src={logo} />
          </div>
          <div className="jobInfo">
            <h4>{Role}</h4>
            <div className="commonStyle">
              <CorporateFareIcon />
              <p>{Company}</p>
            </div>
            <div className="commonStyle">
              <LocationOnIcon />
              <p>{Location}</p>
            </div>
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
      <div
        className={`accordianContent ${accordianIndex === id ? "open" : ""}`}
      >
        <AccordianForm />
      </div>
    </Card>
  );
};

export default ListItem;
