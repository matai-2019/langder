/* eslint-env jest */

jest.mock('../../../client/api/api', () => {
  const testToken = { id: 'test token id' }
  return () => Promise.resolve({ body: { token: testToken } })
})
