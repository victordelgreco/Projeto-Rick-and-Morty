
import BannerRick from '../../img/banner-rick.jpg'

export default function BannerImg() {

    return (
        <div>
            <img src={BannerRick}   style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Mantém a proporção e corta a imagem para preencher todo o espaço
  }}/>
        </div>
    )

}