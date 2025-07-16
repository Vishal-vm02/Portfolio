import React from "react";
import {
  Menu,
  MenuItem,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import img from "./img.jpg";

function MainPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    console.log("Logout clicked");
    // Redirect to login if needed
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "#about" },
    { name: "My Project", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 9999,
        }}
      >
        <div className="container-fluid" style={{ maxWidth: "1200px" }}>
          {/* Logo */}
          <div
            className="navbar-brand d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img
              src={img}
              alt="Logo"
              width="40"
              height="40"
              style={{ borderRadius: "50%" }}
            />
            <span className="ms-2 fw-bold fs-4">Vishal Mahavar</span>
          </div>

          {/* Mobile Toggler */}
          {isMobile && (
            <button
              className="btn btn-outline-secondary ms-auto"
              type="button"
              aria-label="Toggle navigation"
              style={{ padding: "6px 10px", border: "none" }}
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}

          {/* Desktop Menu */}
          {!isMobile && (
            <ul className="navbar-nav ms-auto gap-3">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.name}>
                  <a
                    className="nav-link fw-bold"
                    href={item.href}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && navbarOpen && (
          <div className="w-100 bg-light shadow-sm rounded">
            <ul className="navbar-nav text-center">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.name}>
                  <a
                    className="nav-link fw-bold"
                    href={item.href}
                    onClick={() => setNavbarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* MUI Profile Menu (if needed) */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <Avatar sx={{ mr: 1 }} /> My Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleLogout();
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>

      {/* Spacer for fixed navbar */}
      <div style={{ paddingTop: "75px" }}></div>
    </div>
  );
}

export default MainPage;
