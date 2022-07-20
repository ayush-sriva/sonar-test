import { Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import FilteredJobList from "../../organisms/filteredJobList/index";
import { subHeading, title } from "./constants";
import SavedJobs from "../../molecules/savedJobs";
import {baseUrl} from "../../../baseUrl";
interface JobDescriptionProps {
  jobs: Array<any>;
  setJobs: Function;
}
const JobDescription = ({ jobs }: JobDescriptionProps) => {
  const [status, setStatus] = useState(false);
  const [desc, setDesc] = useState(null);
  const [currSelected, setCurrSelected] = useState(0);
  const handleClick = async (id: number) => {
    if (!status) {
      setStatus(true);
    }
    let jobObj;
    axios
      .get(`${baseUrl}savedJobs/${id}`)
      .then((res) => {
        jobObj = res.data;
        setDesc(jobObj);
      })
      .catch((err) => console.log(err));

    setCurrSelected(id);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
        minHeight: "1357px"
      }}
      data-testid="savedJobs"
    >
      <Box sx={{ marginLeft: "45px", marginTop: "40px", marginRight: "60px" }}>
        {!status ? (
          <SavedJobs jobs={jobs} onClick={handleClick}></SavedJobs>
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
