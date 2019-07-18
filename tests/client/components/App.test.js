import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from '../../../client/components/App'

describe('<App /> tests', () => {
  it('jest working', () => {
    expect(true).toBeTruthy()
  })
  it('contains the router', () => {
    const mockStore = configureStore([thunk])({ user: {} })
    const wrapper = mount(<Provider store={mockStore}><App/></Provider>)
    const routerComponents = wrapper.find('Router').length
    expect(routerComponents).toBe(1)
  })
})