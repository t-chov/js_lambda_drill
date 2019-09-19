import React from 'react'
import AceEditor from 'react-ace'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid, Card, CardContent, Button } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import SolveChip from './SolveChip'
import TransitionButtons from './TransitionButtons'
import Question from '../interfaces/Question'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    questionRoot: {
      marginTop: theme.spacing(4)
    },
    dataCard: {
      backgroundColor: grey[50],
      color: grey[700],
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    editor: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
)

interface LambdaQuestionProps {
  questionKey: number
  question: Question
  hasNext: boolean
  evalFunction: (input: string) => void
  changeFunction: (value: string) => void
}

const LambdaQuestion: React.FC<LambdaQuestionProps> = props => {
  const classes = useStyles()

  return (
    <div className={classes.questionRoot}>
      <Typography variant='h3'>
        Question #{props.questionKey}
        <SolveChip isSolved={props.question.isSolved} />
      </Typography>
      <hr />
      <Typography variant='h4'>Input</Typography>
      <Card className={classes.dataCard}>
        <CardContent>
          <pre>[{props.question.inputArray.join(', ')}]</pre>
        </CardContent>
      </Card>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography variant='h4'>Answer Output</Typography>
          <Card className={classes.dataCard}>
            <CardContent>
              <pre>[{props.question.answerArray.join(', ')}]</pre>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Typography variant='h4'>Your Output</Typography>
          <Card className={classes.dataCard}>
            <CardContent>
              <pre>[{props.question.outputArray.join(', ')}]</pre>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant='h4'>Your Code</Typography>
      <AceEditor
        className={classes.editor}
        mode='javascript'
        theme='monokai'
        value={props.question.inputCode}
        fontSize={14}
        width='100%'
        height='100px'
        onChange={(value: string) => {
          props.changeFunction(value)
        }}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={() => props.evalFunction(props.question.inputCode)}>
        Try
      </Button>
      <hr />
      <TransitionButtons
        currentKey={props.questionKey}
        hasNext={props.hasNext}
      />
    </div>
  )
}

export default LambdaQuestion
