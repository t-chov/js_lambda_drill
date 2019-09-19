import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Breadcrumbs } from '@material-ui/core'

import questions from './questions'
import Question from './interfaces/Question'
import Welcome from './components/Welcome'
import ApplicationBar from './components/ApplicationBar'
import LambdaQuestion from './components/LambdaQuestion'

class App extends React.Component {
  state: {
    questions: Array<Question>
  }

  constructor(props: any) {
    super(props)
    this.state = {
      questions
    }
  }

  // 回答を eval して正答かどうか判定する
  evalInput(questionKey: number, input: string) {
    this.setState({
      questions: this.state.questions.map((question, index) => {
        if (index !== questionKey) return question
        let output: any
        try {
          // eslint-disable-next-line
          output = eval(input)
        } catch {
          return question
        }
        question.output = output
        if (JSON.stringify(question.answer) === JSON.stringify(output)) {
          question.isSolved = true
        }
        return question
      })
    })
  }

  // エディタの内容を変更した際の動作
  onChangeEditor(questionKey: number, input: string) {
    this.setState({
      questions: this.state.questions.map((question, index) => {
        if (index === questionKey) {
          question.inputCode = input
        }
        return question
      })
    })
  }

  render() {
    return (
      <Router>
        <ApplicationBar />
        <Container maxWidth='lg'>
          <Breadcrumbs separator='>' aria-label='breadcrumb'>
            {this.state.questions.map((_, index) => (
              <Link to={`/${index}`}>{index}</Link>
            ))}
          </Breadcrumbs>
          <Route path='/' exact component={Welcome}></Route>
          {this.state.questions.map((question: Question, index: number) => (
            <Route
              key={index}
              path={`/${index}`}
              render={() => (
                <LambdaQuestion
                  questionKey={index}
                  question={question}
                  hasNext={index + 1 < this.state.questions.length}
                  evalFunction={(input: string) => this.evalInput(index, input)}
                  changeFunction={(input: string) =>
                    this.onChangeEditor(index, input)
                  }
                />
              )}
            />
          ))}
        </Container>
      </Router>
    )
  }
}

export default App
