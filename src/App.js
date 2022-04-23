import { useState } from 'react'
import { v4 as uuidv4} from "uuid"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {FeedbackProvider} from './context/FeedbackContext'
import FeedbackData from './data/FeedbackData'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'


function App() {
  const [feedback, setFeedback] = useState (FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback);
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }

  return (
    <FeedbackProvider>
      <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats />
              <FeedbackList handleDelete={deleteFeedback}/>
            </>
          }>
          
          </Route>

          <Route path='/about' element={<AboutPage/>}/>
        </Routes>

        <AboutIconLink/>
      </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App