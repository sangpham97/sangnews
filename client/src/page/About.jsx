import EditorialTeam from '../components/EditorialTeam'
import Title from '../components/Title'
import Seo from '../components/Seo'

export default function About() {
  return (
    <>
      <Seo
        title='About us'
        description='We provide articles about Stock Market, Business News, Investments, Startups, and Entrepreneurship. We also provide Paid Downloadable Monthly issues of duis aute irure dolor in reprehenderit.'
      />
      <div className='mx-auto max-w-screen-xl'>
        <img
          src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/blog-03.jpg'
          alt=''
          className='my-5 w-full h-screen rounded-sm'
        />
        <div className='grid grid-cols-1 md:grid-cols-12 gap-2'>
          <AboutArticle />
        </div>
        <EditorialTeam />
        <div className='mt-16 '>
          <AboutBanner />
        </div>
      </div>
    </>
  )
}

export const AboutArticle = () => {
  return (
    <>
      <div className='md:col-span-3'>
        <Title>about us</Title>
      </div>
      <div className='md:col-span-6 md:pr-20'>
        <h4 className='text-xl md:text-3xl font-bold leading-snug mt-4 pt-4 border-t-4 border-red-500'>
          We provide articles about Stock Market, Business News, Investments,
          Startups, and Entrepreneurship. We also provide Paid Downloadable
          Monthly issues of duis aute irure dolor in reprehenderit.
        </h4>
        <p className='text-gray-500 leading-normal space-y-2'>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          <br />
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          <br />
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className='md:col-span-3 mt-5'>
        <img
          src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/tall-ad-001.jpg'
          alt=''
        />
      </div>
    </>
  )
}

export const AboutBanner = () => {
  return (
    <div className=' px-6 bg-red-500 h-96 flex flex-col justify-center items-center space-y-8 text-center'>
      <h4 className='text-white text-3xl md:text-6xl uppercase font-semibold'>
        Become a Guest Author
      </h4>
      <h5 className='text-xl md:text-3xl text-white font-bold '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </h5>
      <button className='uppercase text-xs bg-white py-3 px-9 font-bold hover:text-red-500'>
        start today
      </button>
    </div>
  )
}
