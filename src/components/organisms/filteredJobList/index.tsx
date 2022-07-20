import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JobCard from "../../molecules/JobCard";
import JobDescriptionCard from "../../organisms/JobDescriptionCard/JobDescriptionCard";
interface Props {
  title: string;
  subHeading: string;
  jobs: any[];
  onClick: Function;
  jobObj: any;
  currindex: number;
}
const FilteredJobList = ({
  title,
  subHeading,
  jobs,
  onClick,
  jobObj,
  currindex,
}: Props) => {
  return (
    <>
      <Typography variant="heading2">{title}</Typography>
      <Typography variant="body2" sx={{ color: "#656E66", marginTop: "4px" }}>
        {subHeading}
      </Typography>
      <Box sx={{ flexGrow: 1, marginTop: "6px" }}>
        <Grid container columns={16}>
          <Grid item xs={11} sx={{ marginRight: "16px" }}>
            {jobs.map((job) => {
              return (
                <Box
                  sx={{
                    marginTop: "15px",
                    border: `${
                      job.id === currindex ? "2px solid #77EDDF" : "none"
                    }`,
                  }}
                >
                  <JobCard
                    companyIcon={job.companyIcon}
                    id={job.id}
                    companyName={job.companyName}
                    location={job.location}
                    time={job.time}
                    title={job.title}
                    onClick={() => {
                      onClick(job.id);
                    }}
                  />
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "15px" }}>
            <JobDescriptionCard
              aboutTheCompany={jobObj.about}
              companyAddress={jobObj.location}
              companyLogo={jobObj.companyIcon}
              companyName={jobObj.companyName}
              id={jobObj.id}
              jobDescription={jobObj.description}
              jobTitle={jobObj.title}
              jobUploadedTime={jobObj.time}
            ></JobDescriptionCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FilteredJobList;
