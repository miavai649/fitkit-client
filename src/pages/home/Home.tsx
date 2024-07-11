import ImgGallery from '@/components/ImgGallery/ImgGallery'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <Banner />
      {/* category section */}
      <Categories />
      <ImgGallery />
    </div>
  )
}

export default Home
