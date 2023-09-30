import { useForm, ValidationError } from "@formspree/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("mbjvpdnb");
  if (state.succeeded) {
    return (
      <Box className="end_result">
        <Typography sx={{ fontSize: "40px" }}>
          Your message Reached Me, I will get back to you shortly!
        </Typography>
        <img
            className="panda_img"
            src="../../../../public/assets/happy_panda.png"
          />
      </Box>
    );
  }
  return (
    <Box sx={{ margin: "1rem" }}>
      <Typography variant="h1">GET IN TOUCH</Typography>
      <form
        action="https://formspree.io/f/mbjvpdnb"
        method="POST"
        onSubmit={handleSubmit}
        className="contact"
      >
        <Box className="form_box">
          <TextField
            className="text_field"
            label="Email"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextField
            className="text_field"
            label="Message"
            multiline
            maxRows={4}
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button variant="contained" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Contact;
