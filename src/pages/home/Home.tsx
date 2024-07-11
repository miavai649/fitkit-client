import ImgGallery from '@/components/ImgGallery/ImgGallery'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import Benefits from '@/components/Benifits/Benifits'
import Featured from '@/components/Featured/Featured'

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <Banner />
      {/* category section */}
      <Categories />
      {/* Featured section */}
      <Featured />
      {/* Benefits Section */}
      <Benefits />
      {/* image gallery section */}
      <ImgGallery />
    </div>
  )
}

export default Home
