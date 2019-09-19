import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const Welcome: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', lineHeight: 8 }}>
      <Typography variant='h2'>Welcome to JS Lambda Drill</Typography>
      <Typography variant='body1'>
        JS Lambda Drill is exercise for beginner of lambda function.
      </Typography>
      <Link to='/0'>
        <Button variant='outlined'>Start</Button>
      </Link>
    </div>
  )
}

export default Welcome
