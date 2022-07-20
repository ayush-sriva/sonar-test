import React from "react";

import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../theme/index";
import moreIcon from "../../../assets/icons/more.svg";
import Icon from "../../atoms/icon/index";
import Button from "../../atoms/button/index";
import ApplyButton from "../../organisms/uploadResume/index";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";

export interface JobTitleProps {
  id: number;
  jobTitle: string;
  companyLogo: any;
  companyName: string;
  companyAddress: string;
  jobUploadedTime: string;
}

const JobTitleCard: React.FC<JobTitleProps> = ({
  id,
  jobTitle,
  companyLogo,
  companyName,
  companyAddress,
  jobUploadedTime,
}: JobTitleProps) => {
  const [status, setStatus] = React.useState("save");
  const handleClick = async () => {
    let jobObj: any;
    await axios
      .get(`${baseUrl}jobs/${id}`)
      .then((res) => {
        jobObj = res.data;
      })
      .catch((err) => console.log(err));

    if (status === "unsave") {
      await axios
        .delete(`${baseUrl}savedJobs/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      setStatus("save");
    } else {
      await axios
        .get(`${baseUrl}savedjobs?companyName=${companyName}`)
        .then((res) => {
          if (res === null) {
            axios
              .post(`${baseUrl}savedJobs`, jobObj)
              .then((response) => {
                console.log(response);
              })
              .catch(() => {
                console.log("error:saved jobs unsave");
                console.log(jobObj);
              });
          }
        })
        .catch((err) => console.log(err));

      setStatus("unsave");
    }
  };
  const companyAndAddressStyle = {
    fontSize: "12px",
    lineHeight: "16px",
    marginTop: "4px",
    color: theme.palette.text.secondary,
  };

  const titleStyles = {
    fontSize: "16px",
    lineHeight: "30px",
    marginTop: "4px",
  };

  const moreIconStyles = {
    paddingLeft: "55px",
    marginTop: "16px",
  };
  return (
    <div data-testid="jobTitleCard">
      <Stack
        direction={"row"}
        sx={{
          marginTop: "8px",
        }}
      >
        <Box
          sx={{
            maxHeight: "45px",
            maxWidth: "45px",
            height: "100%",
            marginTop: "16px",
            paddingRight: "6%",
          }}
        >
          <img
            style={{
              position: "static",
              width: "45px",
              height: "45px",
              paddingLeft: "20px",
            }}
            src={companyLogo}
            alt={companyLogo}
          />
        </Box>

        {
          <Box
            sx={{
              maxWidth: "70%",
              minWidth: "60%",
              paddingTop: "2%",
              paddingLeft: "94",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" sx={titleStyles}>
              {jobTitle}
            </Typography>

            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {" "}
              {companyName}
            </Typography>
            <Typography variant="subtitle2" sx={companyAndAddressStyle}>
              {companyAddress}
            </Typography>

            <Typography variant="caption" sx={{ marginTop: "4px" }}>
              {jobUploadedTime}
            </Typography>
            <Stack direction={"row"}>
              <Box sx={{ marginTop: "20px", marginBottom: "25px" }}>
                <Button
                  width="92px"
                  height="32px"
                  variant="outlined"
                  style={{
                    color: `${theme.palette.primary.primary300}`,
                    border: `1px solid ${theme.palette.primary.primary300}`,
                    borderRadius: "8px",
                    padding: "8px 32px 8px 32px",
                  }}
                  onClick={handleClick}
                >
                  <Typography variant="caption1">{status}</Typography>
                </Button>
              </Box>
              <Box minWidth="10px"></Box>
              <Box sx={{ marginTop: "20px", marginBottom: "25px" }}>
                <ApplyButton />
              </Box>
            </Stack>
          </Box>
        }
        <Box sx={moreIconStyles}>
          <Icon src={moreIcon} />
        </Box>
      </Stack>
    </div>
  );
};
export default JobTitleCard;
