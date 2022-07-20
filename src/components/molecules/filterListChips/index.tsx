import { Box, Typography } from "@mui/material";
import theme from "../../../theme/index";
import Icon from "../../atoms/icon";
import close from "../../../assets/icons/close.svg";
interface ChipsProps {
  text: string;
}

const FilterChips = (props: ChipsProps) => {
  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.structural.color1}`,
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        padding: "4px 12px",
        height: "32px",
      }}
      data-testid="chips"
    >
      <Typography
        variant="caption2"
        sx={{ color: `${theme.palette.textColor.mediumEmphasis}` }}
      >
        {props.text}
      </Typography>
      <Box sx={{ marginTop: "5px" }}>
        <Icon src={close}></Icon>
      </Box>
    </Box>
  );
};

export default FilterChips;
