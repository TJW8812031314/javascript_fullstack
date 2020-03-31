// import Comp from '../components/comp'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styled from 'styled-components'
// import moment from 'moment'

const Comp = dynamic(import('../components/comp'))

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const A = ({ router, name, time }) => (
  <>
    <Title>This is Title {time}</Title>
    <Comp />
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


A.getInitialProps = async (ctx) => {
  const moment = await import('moment')

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'jiawen',
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      })
    }, 1000)
  })
  return await promise
}



export default withRouter(A)