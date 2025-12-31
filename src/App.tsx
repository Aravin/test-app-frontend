import { ApolloProvider } from '@apollo/client/react'
import { client } from './apollo/client'
import Users from './components/Users'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1>Test App Frontend</h1>
            <p>Connected to GraphQL Backend</p>
          </header>
          <main className="App-main">
            <Users />
          </main>
        </div>
      </ApolloProvider>
    </ErrorBoundary>
  )
}

export default App

