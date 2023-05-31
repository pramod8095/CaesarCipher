import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

const TEST_IDS = {
  selectId: 'select',
  plainTextId: 'plain-text',
  cipherTextId: 'cipher-text'
}

describe("CaesarsCipher", () => {

  let select
  let plainTextArea
  let cipherTextArea

  beforeEach(() => {
    const {getByTestId} = render(<App />)
    select = getByTestId(TEST_IDS.selectId)
    plainTextArea = getByTestId(TEST_IDS.plainTextId)
    cipherTextArea = getByTestId(TEST_IDS.cipherTextId)
  })

  afterEach(() => {
    cleanup()
  })

  it('check default/initial state of the select dropdown', () => {
    expect(select).toHaveDisplayValue('Enter shift amount')
  })

  it('check if plaintext to ciphertext conversion works', () => {
    fireEvent.change(select, { target: { value: '5' } })
    fireEvent.change(plainTextArea, { target: { value: 'hackerrank' } })
    expect(cipherTextArea.value).toEqual("mfhpjwwfsp")
  })

  it('check if ciphertext to plaintext conversion works', () => {
    fireEvent.change(select, { target: { value: '7' } })
    fireEvent.change(cipherTextArea, { target: { value: 'hackerrank' } })
    expect(plainTextArea.value).toEqual("atvdxkktgd")
  })

  it('check if you can write in plain and cipher fields without page refresh', () => {
    fireEvent.change(select, { target: { value: '3' } })
    fireEvent.change(plainTextArea, { target: { value: 'hackerrank' } })
    fireEvent.change(plainTextArea, { target: { value: '' } })
    fireEvent.change(cipherTextArea, { target: { value: 'hackerrank' } })
    expect(plainTextArea.value).toEqual("exzhbooxkh")
  })

  it('check if you can write in plain and cipher fields if field not empty', () => {
    fireEvent.change(select, { target: { value: '5' } })
    fireEvent.change(plainTextArea, { target: { value: 'hackerrank' } })
    fireEvent.change(cipherTextArea, { target: { value: 'mfhpjww' } })
    fireEvent.change(cipherTextArea, { target: { value: 'mfhpjwwawesome' } })
    expect(plainTextArea.value).toEqual("hackerrvrznjhz")
  })
})