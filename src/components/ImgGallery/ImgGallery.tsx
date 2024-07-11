import {
  bodyBuilder1,
  bodyBuilder2,
  bodyBuilder3,
  bodyBuilder4,
  bodyBuilder5,
  bodyBuilder7,
  bodyBuilder8,
  bodyBuilder9
} from '@/assets'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const images = [
  bodyBuilder1,
  bodyBuilder2,
  bodyBuilder3,
  bodyBuilder4,
  bodyBuilder5,
  bodyBuilder9,
  bodyBuilder7,
  bodyBuilder8
]

const ImgGallery = () => {
  return (
    <PhotoProvider>
      <section className='container  mb-7 md:mb-14'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mb:mb-8'>
          Be Inspired by Our Users
        </h3>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 4 }}
          className='mt-8'>
          <Masonry gutter='1rem'>
            {images.map((image, i) => (
              <PhotoView key={i} src={image}>
                <img
                  key={i}
                  src={image}
                  style={{ width: '100%', display: 'block' }}
                  alt=''
                />
              </PhotoView>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </PhotoProvider>
  )
}

export default ImgGallery
