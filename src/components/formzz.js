import { Box } from "@mui/system";
import Typography from "@mui/system/typography";
import TextField from '@mui/material/TextField';


function formzz() {
    return (
        <Box
          className="form"
          style={{ width: "474px", height: "920px", backgroundColor: "#3C3D37" }}
        >
          <Typography
            sx={{ fontSize: "1.125rem", fontWeight: "500", margin: 2 }}
            variant="h1"
            gutterBottom
          >
            Form
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "90%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue="your name"
            />
            <TextField
              required
              id="outlined-required"
              label="Number"
              type="number"
              defaultValue="number"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              defaultValue="@mail.com"
            />
            <TextField
              required
              id="outlined-required"
              label="Address"
              defaultValue="2 sirasso wuse 3 abuja"
            />
            <TextField
              id="outlined-helperText"
              label="Notes (optional)"
              defaultValue="Anything else?"
            />
          </Box>
        </Box>
  );
}
export default formzz;
