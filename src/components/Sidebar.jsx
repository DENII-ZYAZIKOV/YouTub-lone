import React from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const iconMap = {
  HomeIcon: <HomeIcon />,
  MusicNoteIcon: <MusicNoteIcon />,
  SchoolIcon: <SchoolIcon />,
  GraphicEqIcon: <GraphicEqIcon />,
  OndemandVideoIcon: <OndemandVideoIcon />,
  SportsEsportsIcon: <SportsEsportsIcon />,
  LiveTvIcon: <LiveTvIcon />,
  FitnessCenterIcon: <FitnessCenterIcon />,
  CheckroomIcon: <CheckroomIcon />,
  FaceRetouchingNaturalIcon: <FaceRetouchingNaturalIcon />,
  TheaterComedyIcon: <TheaterComedyIcon />,
  DeveloperModeIcon: <DeveloperModeIcon />,
};

function SideBar({ selectedCategory, setSelectedCategory, setShowRickroll }) {
  return (
    <Stack
      sx={{ overflow: "auto", height: "90vh", flexDirection: { md: "column" } }}
      direction="row"
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.name}
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "",
            color: "white",
          }}
          onClick={() => {
            setSelectedCategory(category.name);
            setShowRickroll(true);
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {iconMap[category.icon]}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
