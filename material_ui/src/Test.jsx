import { Button, Checkbox, styled, Typography } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  border: "2px solid #0f172a",
  color: "#0f172a",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#0f172a",
    color: "#ffffff",
  },
}));

const Test = () => {
  return (
    <div>
      {/* <Typography
        variant="h5"
        sx={{ color: "red", borderRadius: "8px", border: "1px solid black" }}
      >
        Hello World
      </Typography> */}
      <Button sx={{ color: "navy" }} variant="contained">
        Contained
      </Button>
      <Button variant="text" sx={{ bgcolor: "secondary.main" }}>
        Contained
      </Button>
      <CustomButton variant="contained">Subscribe</CustomButton>
      <Checkbox color="secondary" />
    </div>
  );
};
export default Test;
