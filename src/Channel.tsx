import { makeStyles } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Fader from "./Fader";
import Label from "./Label";
import ToggleButton from "./ToggleButton";
import { XAir } from "./XAir";

type ChannelProps = {
  xair: XAir;
  channelName: string;
  nameAddress: string;
  muteAddress: string;
  soloAddress: string;
  faderAddress: string;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(),
    margin: theme.spacing(),
  },
  flex: {
    flexGrow: 1,
  },
}));

function Channel({
  xair,
  channelName,
  nameAddress,
  muteAddress,
  soloAddress,
  faderAddress,
}: ChannelProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" alignItems="stretch" spacing={1}>
        <Grid item>
          <Label xair={xair} name={channelName} address={nameAddress} />
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <ToggleButton
                xair={xair}
                address={muteAddress}
                color={red[500]}
                invert={true}
              >
                M
              </ToggleButton>
            </Grid>
            <Grid item>
              <ToggleButton
                xair={xair}
                address={soloAddress}
                color={yellow[500]}
              >
                S
              </ToggleButton>
            </Grid>
            <Grid item className={classes.flex}>
              <Fader xair={xair} address={faderAddress} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Channel;
