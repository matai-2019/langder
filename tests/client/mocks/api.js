/* eslint-env jest */

jest.mock('../../../client/api/login.api', () => {
  const testToken = { id: 'test token id' }
  return () => Promise.resolve({ body: { token: testToken } })
})
