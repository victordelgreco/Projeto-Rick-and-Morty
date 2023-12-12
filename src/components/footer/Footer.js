import { TiSocialInstagram, TiSocialPinterest, TiSocialFacebook} from "react-icons/ti";
import '../footer/footer.css'

export default function Footer() {
    return(
        <>
        <div className="container_footer">
            <ul className="social_midia_list_icons">
                <li>
        <TiSocialFacebook />

                </li>
                <li>
        <TiSocialPinterest />
                </li>
                <li>
        <TiSocialInstagram />
                </li>

            </ul>
        </div>
        </>
    )
}

