import Image from 'next/image';


const Circles = () => {
  return( 
      <div className='w-[140px] xl:w-[200px] absolute right-0 bottom-0
      mix-blend-color-dodge animate-pluse duration-75 z-10'>
        <Image
          src="/circles.png"
          alt="Circle Image"
          width={140}
          height={100}
          className="w-full h-full"
        />
      </div>

  );
};

export default Circles;
