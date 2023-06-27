import { useRouter } from 'next/router'
import Layout from '../../components/layout';

 
export default function Page() {
  const router = useRouter()
  return (
  <Layout home>
  <p>Post: {router.query.slug}</p>
  </Layout>
  )
}