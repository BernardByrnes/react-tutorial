import {
  Button,
  Typography,
  IconButton,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  InputLabel,
  RadioGroup,
  FormLabel,
  Radio,
  AppBar,
  FormControl,
  Select,
  Tabs,
  Tab,
} from "@mui/material";

import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: "",
    Gender: "",
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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Tabs value={0} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
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
          <InputLabel>Age</InputLabel>
          <Select name="age" value={inputs.age} onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            onChange={handleChange}
            defaultValue="female"
            name="Gender"
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
