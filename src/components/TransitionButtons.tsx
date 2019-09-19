import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

interface TransitionButtonsProps {
  currentKey: number
  hasNext: boolean
}

const TransitionButtons: React.FC<TransitionButtonsProps> = props => {
  const prevLink = props.currentKey === 0 ? '/' : `/${props.currentKey - 1}`
  if (props.hasNext) {
    return (
      <div>
        <Link to={prevLink}>
          <Button variant='outlined' style={{ marginRight: 4 }}>
            Prev
          </Button>
        </Link>
        <Link to={`/${props.currentKey + 1}`}>
          <Button variant='outlined'>Next</Button>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link to={prevLink}>
          <Button variant='outlined' style={{ marginRight: 4 }}>
            Prev
          </Button>
        </Link>
        <Button variant='outlined' disabled>
          Next
        </Button>
      </div>
    )
  }
}

export default TransitionButtons
