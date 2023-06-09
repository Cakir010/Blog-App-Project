import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import image from "../assets/learning-and-5.png";
import { Formik } from "formik";
import LoginForm, { loginScheme }   from "../components/auth/LoginForm";
import useAuthCalls from "../hooks/useAuthCalls";
import { Link } from "react-router-dom";

const Login = () => {
    const { login } = useAuthCalls();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "88vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            BLOG APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              m: "auto",
              
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="tomato">
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
                login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={6} sx={{mt:4}}>
          <Container>
            <img src={image} alt="img"

             width={400} 
             height= {290 }
              />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;