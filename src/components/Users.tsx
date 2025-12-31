import { useQuery, useMutation } from '@apollo/client/react'
import { gql } from '@apollo/client'
import { useState } from 'react'
import './Users.css'

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`

const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      name
      email
    }
  }
`

function Users() {
  const { loading, error, data, refetch } = useQuery(GET_USERS)
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => {
      refetch()
      setName('')
      setEmail('')
    },
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      createUser({
        variables: {
          createUserInput: {
            name,
            email,
          },
        },
      })
    }
  }

  if (loading) return <div className="loading">Loading users...</div>
  if (error) {
    return (
      <div className="error">
        <h3>Error loading users</h3>
        <p>{error.message}</p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
          Make sure the backend server is running on http://localhost:4000
        </p>
        <button
          onClick={() => refetch()}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: '#282c34',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="users-container">
      <div className="users-section">
        <h2>Users List</h2>
        {data?.users && data.users.length > 0 ? (
          <div className="users-grid">
            {data.users.map((user: any) => (
              <div key={user.id} className="user-card">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <span className="user-id">ID: {user.id}</span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ padding: '1rem', color: '#666' }}>No users found</p>
        )}
      </div>

      <div className="create-user-section">
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Create User
          </button>
        </form>
      </div>
    </div>
  )
}

export default Users

