import * as React from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  MenuItem,
  styled,
  InputBase,
  Button,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { signIn, signOut, useSession } from "next-auth/react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 100,
  backgroundColor: "#F8F8F8",
  "&:hover": {
    backgroundColor: "#F8F8F8",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header() {
  const { data: sessionData } = useSession();

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: "0,25",
            marginTop: 3,
          }}
        >
          <Box
            sx={{
              width: 121,
              height: 63,
              backgroundColor: "#00aeef",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            component={Link}
            href="/"
          >
            <img
              src="https://img-hopi.mncdn.com/web-assets/4.24.2-ug1683631407/assets/img/hopi-white-logo.svg"
              height={40}
              width={38}
            />
          </Box>
          <Box
            sx={{
              width: 121,
              height: 63,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://img-hopi.mncdn.com/web-assets/4.24.2-ug1683631407/assets/img/hopishop-logo.svg"
              width={81}
              height={40}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", flex: "0,75" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MenuItem component={Link} href="/urunler">
              <Typography
                textAlign="center"
                color={"#ACACAC"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                ÜRÜNLER
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                textAlign="center"
                color={"#ACACAC"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                WEHOPİ
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                textAlign="center"
                color={"#ACACAC"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                KAMPANYALAR
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                textAlign="center"
                color={"#ACACAC"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                MARKALAR
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                textAlign="center"
                color={"#ACACAC"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                HOPİ
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                textAlign="center"
                color={"#ACACAC"}
                fontFamily={"monospace"}
                fontWeight={"bold"}
              >
                BLOG
              </Typography>
            </MenuItem>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#9B9B9B" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            className="headerButton"
            sx={{
              borderRadius: 100,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
            variant="contained"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? (
              <>
                <Typography fontFamily={"monospace"} fontWeight={"bold"}>
                  Hoşgeldin, {sessionData.user.name}
                </Typography>
                <PersonIcon />
              </>
            ) : (
              <>
                <Typography fontFamily={"monospace"} fontWeight={"bold"}>
                  Sign In or Sign Up
                </Typography>
                <PersonIcon />
              </>
            )}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
