import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from '@material-ui/core'

import Question from './interfaces/Question'
import ApplicationBar from './components/ApplicationBar'
import LambdaQuestion from './components/LambdaQuestion'

class App extends React.Component {
  state: {
    questions: Array<Question>
  }

  constructor(props: any) {
    super(props)
    this.state = {
      questions: [
        {
          inputArray: [1, 2, 3, 4, 5],
          answerArray: [2, 4, 6, 8, 10],
          outputArray: [1, 2, 3, 4, 5],
          inputCode: '[1, 2, 3, 4, 5].map(x => /* write here */);',
          isSolved: false
        }
      ]
    }
  }

  render() {
    const classes = this.props
    return (
      <Router>
        <ApplicationBar />
        <Container maxWidth='lg'>
          <LambdaQuestion
            question={this.state.questions[0]}
            evalFunction={(inputCode: string) => {
              let outputArray: Array<any>
              try {
                outputArray = eval(inputCode) as Array<any>
              } catch {
                return
              }
              const question = this.state.questions[0]
              question.outputArray = outputArray
              if (question.answerArray.toString() === outputArray.toString()) {
                question.isSolved = true
              }
              this.setState({
                questions: this.state.questions.splice(0, 1, question)
              })
            }}
            changeFunction={(value: string) => {
              const question = this.state.questions[0]
              question['inputCode'] = value
              this.setState({
                questions: this.state.questions.splice(0, 1, question)
              })
            }}
          />
        </Container>
      </Router>
    )
  }
}

export default App
