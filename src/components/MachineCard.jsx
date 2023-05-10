import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Unstable_Grid2";
import imgUrl from "../media/pngwing.png";
import { Typography } from "@mui/material";

const MachineCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Typography variant="h4" component="div">
              MAC-001
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              FANUC
            </Typography>
            <CircularProgress
              color="success"
              variant="determinate"
              value={100}
              size="6rem"
              thickness={"8"}
            />
          </Grid>
          <Grid xs={8}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={imgUrl}
              alt="Live from space album cover"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          fullWidth={true}
          onClick={() => alert("You clicked me!!!")}
        >
          DETAIL
        </Button>
      </CardActions>
    </Card>
  );
};

export default MachineCard;
