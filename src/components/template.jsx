import {
  Avatar,
  Button,
  Chip,
  createTheme,
  Divider,
  Stack,
} from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
import "./template.css";
import { links, openLink } from "./Links";
import ReactPlayer from "react-player";

export function Template() {
  return (
    <div className="body">
      <Stack className="top__stack" alignItems="center" spacing={2}>
        <Avatar
          alt="Logo"
          src={Logo}
          sx={{ width: "12rem", height: "12rem" }}
        />
        <Chip variant="outlined" label="@baierbuamandfriends" />
      </Stack>
      <Divider variant="middle" />
      <Stack className="bottom__stack" spacing={3} alignItems="center">
        {links.map((item) => (
          <Button
            size="large"
            sx={{ textTransform: "none", color: "black" }}
            variant="outlined"
            className="chip"
            onClick={() => openLink(item.url)}
            startIcon={item.icon}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
      <ReactPlayer url="src/assets/Hinterdupfer_Bene.mp4" />
    </div>
  );
}
