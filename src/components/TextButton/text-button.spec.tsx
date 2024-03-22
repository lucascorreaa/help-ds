/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render } from '@testing-library/react'
import { TextButton } from './index'

describe('TextButton Component Test Unit', () => {

  it('should render TextButton default', () => {
    const { getByText } = render(
        <TextButton label='Test label button' />
    )

    expect(getByText('Test label button')).toBeTruthy()
  })
  
})

