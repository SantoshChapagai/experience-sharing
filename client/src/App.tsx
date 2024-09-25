import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
export const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <div>Hello app is here</div>
          <Route />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
