import {
  Button,
  Typography,
  IconButton,
  Badge,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  InputLabel,
  RadioGroup,
  FormLabel,
  Radio,
} from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState } from "react";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 420,
          marginInline: "auto", // center horizontally
          marginTop: "24px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <TextField
          name="name"
          onChange={handleChange}
          value={inputs.name}
          sx={{ margin: 3 }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <TextField
          name="email"
          onChange={handleChange}
          value={inputs.email}
          sx={{ margin: 3 }}
          type="email"
          id="filled-basic"
          label="Email"
          variant="filled"
        />
        <TextField
          name="password"
          onChange={handleChange}
          value={inputs.password}
          type="password"
          sx={{ margin: 3 }}
          id="standard-basic"
          label="password"
          variant="standard"
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    subscribe: !inputs.subscribe,
                  }))
                }
                sx={{
                  color: "pink",
                  "&.Mui-checked": {
                    color: "blue",
                  },
                }}
              />
            }
            label="Subscribe"
          />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel id="age-label">Age</InputLabel>
          <Select
            labelId="age-label"
            id="age-select"
            name="age"
            value={inputs.age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" sx={{ margin: 3 }}>
          Submit
        </Button>
      </form>
      <Typography variant="h3">{inputs.name}</Typography>
    </div>
  );
};
export default Test;
