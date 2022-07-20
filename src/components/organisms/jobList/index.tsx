import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import JobListCard from "../../molecules/jobListCard";
interface Props {
  title: string;
  subHeading: string;
  jobs: any[];
  onClick: Function;
}
const JobList: React.FC<Props> = (props) => {
  return (
    <div data-testid="joblistcard">
      <Typography variant="heading2">{props.title}</Typography>
      <Typography variant="body2" sx={{ color: "#656E66", marginTop: "4px" }}>
        {props.subHeading}
      </Typography>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          {props.jobs.map((job) => {
            return (
              <Grid item xs={4}>
                <JobListCard
                  companyLogo={job.companyIcon}
                  company={job.companyName}
                  post={job.title}
                  location={job.location}
                  time={job.time}
                  onClick={() => {
                    props.onClick(job.id);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default JobList;
