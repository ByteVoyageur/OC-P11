// useAPILogIn.test.js
import { renderHook, act } from '@testing-library/react-hooks'
import useAPILogIn from './useAPILogIn'

// Mock the global fetch function
global.fetch = jest.fn((url, options) => {
  // Parse the request body
  const body = JSON.parse(options.body)

  // Check the email and password
  if (body.email === 'steve@rogers.com' && body.password === 'password456') {
    return Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ token: 'fake_token' }),
    })
  } else {
    return Promise.resolve({
      status: 401,
      json: () => Promise.resolve({ error: 'Invalid email or password' }),
    })
  }
})

describe('useAPILogIn', () => {
  it('returns status 200 after logIn with correct email and password', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAPILogIn())

    act(() => {
      result.current.logIn('steve@rogers.com', 'password456')
    })

    // Wait for hook to update
    await waitForNextUpdate()

    expect(result.current.status).toBe(200)
  })
})
