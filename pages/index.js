import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
<<<<<<< HEAD
        <p>「ytmori」のプロフィール!!!aaaaaaa
=======
        <p>「ytmori」のプロフィール!!!aa
>>>>>>> b5726957f7ba6a95191aa595dfc56935d4a0bbea
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}