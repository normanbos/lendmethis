import styled from 'styled-components/macro'
import React from 'react'

export function FormLabel({ htmlFor, content }) {
  return (
    <Label htmlFor={htmlFor}>
      <small>
        <i>{content}</i>
      </small>
    </Label>
  )
}

export const CardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: auto;
`

export const Label = styled.label`
  grid-column: 1 / 2;
  padding: 0.5em 0.5em 0.5em 0;
`

export const Input = styled.input`
  grid-column: 2 / 3;
  box-sizing: border-box;
  overflow: auto;
  width: auto;
  margin: 5px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 100%;
`
