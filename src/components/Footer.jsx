import { FaDiscord, FaTwitter, FaGithub, FaTwitch } from 'react-icons/fa'

const Links = [
  { href: 'https://www.discord.com', icon: <FaDiscord /> },
  { href: 'https://www.twitter.com', icon: <FaTwitter /> },
  { href: 'https://www.twitch.com', icon: <FaTwitch /> },
  { href: 'https://www.github.com', icon: <FaGithub /> }
]


const Footer = () => {
  return (
    <footer className='w-screen bg-black-500 py-4 text-white'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
          <p className='text-center text-sm md:text-left'>© 2026 Valorant. All rights reserved.</p>

          <div className='flex justify-center gap-4 md:justify-start'> 
            {Links.map((link, index) => (
              <a key={index} href={link.href} className='text-white transition-colors duration-500 ease-in-out hover:text-gray-400'>
                {link.icon}
              </a>
            ))}
          </div>

          <a href='#privacy-policy' className='text-center text-sm hover:underline md:text-right'>
            Privacy Policy
          </a>
        </div>
    </footer>
  )
}

export default Footer