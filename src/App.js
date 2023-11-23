import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              return (
                <Route key={route.path} path={route.path} element={
                    <Page />
                } />
              )
            })}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
