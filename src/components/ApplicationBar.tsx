import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(4)
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

export default function ApplicationBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Container maxWidth='lg'>
            <Typography variant='h6' className={classes.title}>
              JS Lambda Drill
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}
