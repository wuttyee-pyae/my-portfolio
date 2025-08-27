import Image from 'next/image';


const Circles = () => {
  return( 
      <div className='w-[2000px] xl:w-[300px] absolute -right-16 -bottom-2 
      mix-blend-color-dodge animate-pluse duration-75 z-10 w-[200px]'>
        <Image
          src="/circles.png"
          alt="Circle Image"
          width={260}
          height={200}
          className="w-full h-full"
        />
      </div>

  );
};

export default Circles;
