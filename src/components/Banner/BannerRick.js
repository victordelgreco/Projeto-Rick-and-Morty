import BannerRick from '../../img/banner-morty.jpg'
import '../Banner/BannerRick.css'

export default function BannerImg() {

    return (
        <div className='container-banner' >
            <img src={BannerRick}   style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Mantém a proporção e corta a imagem para preencher todo o espaço
  }}/>
        </div>
    )

}