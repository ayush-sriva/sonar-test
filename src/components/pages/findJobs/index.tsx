import { Grid, Box, Typography } from "@mui/material";
import theme from "../../../theme/index";
import JobSearch from "../../organisms/jobSearchBar";
import FilterDialog from "../../organisms/filterModal";
import { useState } from "react";
import JobList from "../../organisms/jobList";
import FilteredJobList from "../../organisms/filteredJobList";
import axios from "axios";
import { subHeading, title } from "./constants";
interface JobDescriptionProps {
  jobs: Array<any>;
  setJobs: Function;
}
const JobDescription = ({ jobs}: JobDescriptionProps) => {
  const [status, setStatus] = useState(false);
  const [filter, setFilter] = useState({
    distance0: false,
    distance1: false,
    distance2: false,
    distance3: false,
    fullTime: false,
    internship: false,
    contract: false,
    remote: false,
    fresher: false,
    midLevel: false,
    director: false,
    executive: false,
    bus: false,
    carpool: false,
  });

  const [desc, setDesc] = useState(null);
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  const [currSelected, setCurrSelected] = useState(0);
  const handleClick = async (id: number) => {
    if (!status) {
      setStatus(true);
    }
    await axios
      .get(`localhost:4004/api/jobs/${id}`)
      .then((res) => {
        let jobObj = res.data;
        setDesc(jobObj);
      })
      .catch((err) => console.log(err));

    setCurrSelected(id);
  };
  const handleClear = () => {
    setFilter({
      distance0: false,
      distance1: false,
      distance2: false,
      distance3: false,
      fullTime: false,
      internship: false,
      contract: false,
      remote: false,
      fresher: false,
      midLevel: false,
      executive: false,
      director: false,
      bus: false,
      carpool: false,
    });
  };
  const handleApply = () => {
    const asArray = Object.entries(filter);

    const filtered = asArray.filter(([_key, value]) => value === true);

    const filteredOptions = Object.fromEntries(filtered);
    const filteredArray = Object.keys(filteredOptions);
    console.log(filteredArray);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
        minHeight: "1357px",
      }}
      data-testid="findJobs"
    >
      <Box sx={{ marginLeft: "45px", marginTop: "40px" }}>
        <Box sx={{ marginBottom: "8px" }}>
          <Typography
            variant="heading2"
            sx={{ color: `${theme.palette.textColor.highEmphasis}` }}
          >
            Find Jobs
          </Typography>
        </Box>
        <Grid container columns={12} spacing={3}>
          <Grid item xs={10}>
            <JobSearch></JobSearch>
          </Grid>
          <Grid item xs={1}>
            <FilterDialog
              filters={filter}
              handleChange={handleCheckChange}
              handleClear={handleClear}
              handleApply={handleApply}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginLeft: "45px", marginTop: "40px", marginRight: "60px" }}>
        {!status ? (
          <JobList
            jobs={jobs}
            title={title}
            subHeading={subHeading}
            onClick={handleClick}
          ></JobList>
        ) : (
          desc && (
            <FilteredJobList
              jobObj={desc}
              jobs={jobs}
              onClick={handleClick}
              subHeading={subHeading}
              title={title}
              currindex={currSelected}
            ></FilteredJobList>
          )
        )}
      </Box>
    </Box>
  );
};

export default JobDescription;
