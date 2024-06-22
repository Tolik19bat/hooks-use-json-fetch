import './App.css'
import DataComponent from './components/DataComponent'
import ErrorComponent from './components/ErrorComponent'
import LoadingComponent from './components/LoadingComponent'

function App() {

  return (
    <>
      <h1>Data Component</h1>
      <DataComponent />
      <h1>Error Component</h1>
      <ErrorComponent />
      <h1>Loading Component</h1>
      <LoadingComponent />
    </>
  )
}

export default App
