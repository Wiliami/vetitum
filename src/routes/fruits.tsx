import { createFileRoute } from '@tanstack/react-router'
import { fruits } from './data'

export const Route = createFileRoute('/fruits')({
  component: Fruits,
})


function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
  <span style={{ color: 'red'}}>
    {product.name}
  </span>

  return (
    <tr>
      <td>{product.name}</td>
      <td></td>
    </tr>
  ) 
}

function Fruits() {
  return (
    <ul>
      {fruits.map(fruit => 
        <li>{fruit.name}</li>
      )}
    </ul>
  )
}
