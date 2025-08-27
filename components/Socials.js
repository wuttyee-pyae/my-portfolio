import Link from 'next/link';
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine,
  RiBehanceLine, RiPinterestLine } from 'react-icons/ri';


const Socials = () => {
  return (
   
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href='https://www.youtube.com/' target='_blank'
      className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href='https://www.instagram.com/' target='_blank' 
      className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href='https://www.facebook.com/' target='_blank'
      className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href='https://dribbble.com/' target='_blank'
      className='hover:text-accent transition-all duration-300'>
        <RiDribbbleLine />
      </Link>
      <Link href='https://www.behance.net/' target='_blank'
      className='hover:text-accent transition-all duration-300'>
        <RiBehanceLine />
      </Link>
      <Link href='https://www.pinterest.com/' target='_blank'
      className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link>
    </div>
  )
};

export default Socials;
