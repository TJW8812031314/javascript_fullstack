// import Comp from '../components/comp'
import { withRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const A = ({ router, name }) => {
  return (
    <>
      <Title>This is Title</Title>
      <Link href="#aaa">
        <a className="link">{router.query.id}{name}</a>
      </Link>

      <style jsx>{`
        a {
          color: blue
        }
        .link {
          color: red;
        } 
      `}</style>
    </>
  )
}

A.getInitialProps = async (ctx) => {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'jiawen'
      })
    }, 1000)
  })
  return await promise
}

export default withRouter(A)