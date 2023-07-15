import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Task#1"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      position="static"
      sx={{
        background: "#232730",
        boxShadow: "10px 10px 20px #22252E",
        borderBottom: "1px solid #2C2F37",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="../images/logo192.png"
            alt="react-logo"
            sx={{
              height: 40,
              width: 40,
              maxHeight: { xs: 20, md: 40 },
              maxWidth: { xs: 20, md: 40 },
              mr: 1,
              display: { xs: "none", md: "flex" },
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: "0rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            React
          </Typography>

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
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ fontFamily: "Inter" }}
                >
                  <Typography textAlign="center" sx={{ fontFamily: "Inter" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src="../images/logo192.png"
            alt="react-logo"
            sx={{
              height: 40,
              width: 40,
              maxHeight: { xs: 30, md: 40 },
              maxWidth: { xs: 30, md: 40 },
              mr: 1,
              display: { xs: "flex", md: "none" },
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            React
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Inter",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box
              sx={{
                mr: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 18,
                  fontFamily: "Inter",
                }}
              >
                El Doggo
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                <Box
                  component="img"
                  src="../images/green-dot.png"
                  sx={{
                    width: 12,
                    height: 12,
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    ml: 0.5,
                    fontFamily: "Inter",
                    fontWeight: 200,
                  }}
                >
                  Online
                </Typography>
              </Box>
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Box
                  component="img"
                  src="../images/selfie-doggo.jpg"
                  sx={{
                    width: 40,
                    height: 40,
                    maxWidth: { xs: 30, md: 40 },
                    maxHeight: { xs: 30, md: 40 },
                    background: "cover",
                    objectFit: "cover",
                    borderRadius: 100,
                  }}
                ></Box>
                {/* <Avatar alt="Remy Sharp" src="../images/selfie-doggo.jpg" /> */}
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ fontFamily: "Inter" }}
                >
                  <Typography textAlign="center" sx={{ fontFamily: "Inter" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
