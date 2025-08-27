import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image  src={'/avatar.png'} alt="Avatar Image" width={637} height={578} 
      className="translate-z-[-10] w-full h-full" />
    </div>
  );
};

export default Avatar;
