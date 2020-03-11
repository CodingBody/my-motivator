import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
const TodoFormThird = ({ onChange, form, onRatingChange, classes }) => {
  return (
    <React.Fragment>
      <Grid style={{ padding: "2rem 0 0 1rem" }} justify="center" container>
        <Grid
          style={{ textAlign: "center", padding: "0 0 1rem 0" }}
          sm={9}
          item
        >
          <Typography
            className={classes.thirdTextFirst}
            varient="h5"
            component="legend"
          >
            How important is it?
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "center" }} sm={9} item>
          <Rating
            className={classes.thirdRatingBox}
            name="simple-controlled"
            value={form.importance}
            onChange={onRatingChange}
            style={{ fontSize: "3rem" }}
          />
        </Grid>
      </Grid>
      {/* <Box m={1}>
        <Typography
          className={classes.thirdTextSecond}
          varient="subtitle1"
          component="legend"
        >
          You can set a reward for yourself if you want :) (Obtional)
        </Typography>
        <TextField
          variant="outlined"
          id="todoTitle"
          type="text"
          value={form.reward}
          label="Title"
          onChange={onChange("reward")}
          fullWidth
          className={classes.formControl}
        />
      </Box> */}
    </React.Fragment>
  );
};

export default TodoFormThird;
