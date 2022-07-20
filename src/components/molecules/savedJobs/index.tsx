import JobCard from "../JobCard";
import { Grid, Typography, Box } from "@mui/material";
import theme from "../../../theme/index";
import { text } from "./constants";

interface Props {
  onClick: Function;
  jobs: any[];
}
export default (props: Props) => {
  return (
    <Grid sx={{ marginLeft: "45px" }} data-testid="savedjobs">
      <Box sx={{ marginBottom: "20px" }}>
        <Typography
          variant="heading2"
          sx={{ color: `${theme.palette.textColor.highEmphasis}` }}
        >
          {text}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "6px" }}>
        <Grid container columns={16}>
          <Grid item xs={11} sx={{ marginRight: "16px" }}>
            {props.jobs.map((job) => {
              return (
                <Grid item xs={4} sx={{ marginTop: "6px" }}>
                  <JobCard
                    companyIcon={job.companyIcon}
                    id={job.id}
                    companyName={job.companyName}
                    location={job.location}
                    time={job.time}
                    title={job.title}
                    onClick={() => {
                      props.onClick(job.id);
                    }}
                  ></JobCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
