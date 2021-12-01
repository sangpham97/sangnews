import AroundTheWorld from '../components/AroundTheWorld'
import Categories from '../components/Categories'
import EditorialPicks from '../components/EditorialPicks'
import NewArticle from '../components/NewArticle'
import PostCast from '../components/PostCast'
import Seo from '../components/Seo'
import TrendingNews from '../components/TrendingNews'

export default function Home() {
  return (
    <>
      <Seo
        title='Home'
        description='Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      />
      <div className='mx-auto max-w-screen-xl'>
        <NewArticle />
        <TrendingNews />
        <EditorialPicks />
        <Categories />
        <AroundTheWorld />
        <PostCast />
      </div>
    </>
  )
}
