import React from 'react'
import { Chip, Avatar } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

interface SolveChipProps {
  isSolved: boolean
}

const SolveChip: React.FC<SolveChipProps> = props => {
  if (props.isSolved) {
    return (
      <Chip
        color='primary'
        label='solved'
        avatar={
          <Avatar>
            <DoneIcon />
          </Avatar>
        }
      />
    )
  } else {
    return <Chip variant='outlined' label='unsolved' />
  }
}

export default SolveChip
