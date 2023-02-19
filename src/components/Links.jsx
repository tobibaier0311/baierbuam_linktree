import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';


export const links = [
    {
        name: "Webseite",
        url: "https://baierbuamandfriends.de/",
        icon: <HomeIcon/>,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/baierbuamandfriends",
        icon: <InstagramIcon/>,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/baierbuamandfriends",
        icon: <FacebookIcon/>,
    },
    {
        name: "Email",
        url: "mailto:baierbuamandfriends@web.de",
        icon: <EmailIcon/>,
    }
]

export function openLink(link){
    window.open(link)
}