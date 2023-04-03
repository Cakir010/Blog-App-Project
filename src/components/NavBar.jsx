import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logout } from "@mui/icons-material";
import useAuthCalls from "../hooks/useAuthCalls";

const pages = ["Dashboard", "New Blog", "About"];
const settings = ["My Blogs", "Profile", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { currentUser, image } = useSelector((state) => state.auth);

  const { logout } = useAuthCalls();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar sx={{ bgcolor: "orange" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
          >
            <img
              onClick={() => navigate("/")}
              width={"50px"}
              src="https://clarusway.com/wp-content/uploads/2023/03/olive-spring-150x150.png"
              alt=""
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/");
                  handleCloseNavMenu();
                }}
              >
                <Typography>Dashboard</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/login");
                  handleCloseNavMenu();
                }}
              >
                <Typography>NewBlog</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleCloseNavMenu();
                }}
              >
                <Typography>About</Typography>
              </MenuItem>

              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              cursor: "pointer",
            }}
          >
            <img
              width={"50px"}
              src="https://clarusway.com/wp-content/uploads/2023/03/olive-spring-150x150.png"
              alt=""
            />
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
            >
              <Typography>Dashboard</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate("/login")}>
              <Typography>NewBlog</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate("/about")}>
              <Typography>About</Typography>
            </MenuItem>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={image}/>
              </IconButton>
            </Tooltip>
            {currentUser && (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/myblogs");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>My Blogs</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>Profile</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logout();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            )}

            {!currentUser && (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>Login</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
