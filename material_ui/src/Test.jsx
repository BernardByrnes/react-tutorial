import { Button, Typography } from "@mui/material";

const Test = () => {
  return (
    <div>
      {/* <Typography
        variant="h5"
        sx={{ color: "red", borderRadius: "8px", border: "1px solid black" }}
      >
        Hello World
      </Typography> */}
      <Button sx={{ typography: "primaryButtonStyles" }} variant="contained">
        Contained
      </Button>
    </div>
  );
};
export default Test;
