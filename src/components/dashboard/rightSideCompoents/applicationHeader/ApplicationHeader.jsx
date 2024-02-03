import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ListIcon from "@mui/icons-material/List";

import "./ApplicationHeader.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../../../../Redux/features/dashboard/applicationSlice";

function Header() {
  const dispatch = useDispatch();
  const [selectedToggle, setSelectedToggle] = useState(
    useSelector((state) => state.applications.toggle)
  );
  const [jobType, setJobType] = useState("");
  const [status, setStatus] = useState("");

  const handleToggleClick = (toggle) => {
    setSelectedToggle(() => {
      return toggle;
    });

    dispatch(setToggle(toggle));
  };
  return (
    <div className="header">
      <div className="mainHeadingContainer">
        <div className="headingTitle">
          <h1>{"user name"} Your Submitted Applications</h1>
        </div>
        <div className="subHeading">
          <div className="subHeadingInfo">
            <h4>{"10"} TOTAL APPLICATIONS</h4>
            <h4>Active</h4>
            <h4>Archived</h4>
          </div>
          <div className="buttonsContainer">
            <Button
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
              className="navButton"
            >
              Add Applications
            </Button>
            <Button
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
              className="navButton"
            >
              Generate Chart
            </Button>
            <Button
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
              className="navButton"
            >
              Archive All
            </Button>
          </div>
        </div>
      </div>
      <div className="filterContainer">
        <div className="searchField">
          <TextField
            placeholder="Search for Roles or Companies..."
            className="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="filters">
          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            size="small"
            className="filter"
          >
            <InputLabel id="demo-select-small-label">Job Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={jobType}
              label="Job Type"
              // onChange={handleChange}
            >
              <MenuItem value="intership">Internship</MenuItem>
              <MenuItem value="fulltime">Full-time</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            disabled={selectedToggle == "list" ? false : true}
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
              <MenuItem value="applied">Applied</MenuItem>
              <MenuItem value="screen">Screen</MenuItem>
              <MenuItem value="Interviewing">Interviewing</MenuItem>
              <MenuItem value="Offer">Offer</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="toggles">
        <div
          className={`toggle ${selectedToggle == "columns" ? "selected" : ""}`}
          onClick={() => handleToggleClick("columns")}
        >
          <ViewColumnIcon />
          Columns
        </div>
        <div
          className={`toggle ${selectedToggle == "list" ? "selected" : ""}`}
          onClick={() => handleToggleClick("list")}
        >
          <ListIcon /> List
        </div>
      </div>
    </div>
  );
}

export default Header;
