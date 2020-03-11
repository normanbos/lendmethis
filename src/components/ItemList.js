import React from 'react'
import ItemCard from './ItemCard'
import styled from 'styled-components'

export default function ItemList({ items }) {
  console.log(items)

  return (
    <>
      {items.map(item => (
        <ItemCard
          title={item.title}
          borrower={item.borrower}
          borrowdate={item.borrowdate}
          duedate={item.duedate}
          key={item.id}
        ></ItemCard>
      ))}
    </>
  )
}

export const StyledItemList = styled.section`
  background: #151611;
  padding: 20px;
`
