import { Box, Link } from "@mui/material";
import { CardMedia } from "@mui/material";
import React from "react";
import Design_Patterns_Cover from "../../media/images/DESIGN_PATTERNS_COVER_NO_EDGES_800_PX.jpg";

export const ResourcesComponent = () => {
  return (
    <Box
      sx={{
        border: "5px solid  #0e2e5d",
        borderRadius: 2,
        margin: { xs: "50px 20px", lg: "60px auto 130px" },
        mb: { sm: "130px" },
        backgroundColor: "white",
        px: { xs: 2 },
        display: "flex",
        flexDirection: "column",
        width: { lg: "56%" },
      }}
    >
      <Box
        sx={{
          fontSize: { xs: 40, sm: 56, lg: 49 },
          color: "#0e2e5d",

          fontWeight: 500,
        }}
      >
        Favorite Resources:
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", lg: "37%" },
            px: { xs: 2 },
            py: { xs: 2 },
            my: { xs: 2 },
            border: "2px solid  #0e2e5d",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              fontSize: 25,
              color: "#0e2e5d",
              pb: { xs: 1 },
              fontWeight: 500,
            }}
          >
            <Box sx={{ fontWeight: "bold" }} component="span">
              Design Patterns
            </Box>{" "}
            by{" "}
            <Box sx={{ fontStyle: "italic", fontWeight: 400 }} component="span">
              "The Gang of Four"
            </Box>
          </Box>
          <Box sx={{}}>
            <CardMedia
              component="img"
              // some JSON files have larger / smaller images in separate indexes
              src={Design_Patterns_Cover}
              sx={{}}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "50%", lg: "37%" },
            px: { xs: 2 },
            py: { xs: 2 },
            my: { xs: 2 },
            border: "2px solid  #0e2e5d",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              fontSize: 25,
              color: "#0e2e5d",
              pb: { xs: 1 },
              fontWeight: 500,
            }}
          >
            <Box sx={{ fontWeight: "bold" }} component="span">
              Mozilla Developer Network Docs:
            </Box>{" "}
            <Box sx={{ fontStyle: "italic", fontWeight: 400 }} component="span">
              JavaScript Reference
            </Box>
          </Box>
          <Box></Box>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <CardMedia
              component="img"
              src={
                "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png"
              }
              sx={{}}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
