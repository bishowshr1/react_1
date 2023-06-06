import React from 'react'

const HomePage = () => {
  // const amount = 900;
  // const personName = 'hello world';

  // const a = 90;
  // const b = 100;

  // // console.log(a < b);
  // // console.log(a > b);
  // // console.log(a <= b);
  // // console.log(a >= b);
  // // console.log(a === b);
  // // console.log(a !== b);

  // console.log(a > b || a < b || a === b);
  // console.log(a > b && a < b && a === b);

  return (
    <div>
      <div className='bg-black'>
        {/* <h1 className='text-[20px]  text-purple-700 font-bold underline decoration-wavy tracking-wide bg-slate-300'>{`${amount} ${personName.toLocaleUpperCase()}`}</h1> */}


        <div className="info grid justify-center items-center ml-[400px]">
          <img className='h-300% w-500% rounded-sm' src="https://images.squarespace-cdn.com/content/v1/5a78ab8490badee028bef0e9/1568935524292-TPSLMXHD9HE6PKN02YOG/Interstellar.jpg?format=1500w" alt="" />


          <div className='shadow-2xl py-2 px-2 leading-7 col-span-2 bg-gray-900 text-white  w-[739px] h-auto overflow-auto'>

            <h1 className='font-extrabold text-white px-9'>Interstellar</h1>
            <p>Pg-13/2h 49min/ Adventure, Drama,Sci-fi,</p>
            <br />
            <div className='flex justify-between px-4 py-4'>
              <h1 className=''>SUMMARY</h1>


              <p className='text-right  text-red-900 space-x-2'>

                <i class="fa-regular fa-face-smile px-3 "></i >124
                <i class="fa-regular fa-face-smile px-3 "></i>4</p>
            </div>

            <p className=' py-4 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cum obcaecati quidem atque, cupiditate minima ipsa sed quibusdam. Debitis ullam, possimus accusamus non similique maiores commodi magnam laboriosam id ab.</p>
          </div>

          <div className='shadow-2xl py-4 px-4 leading-1 col-span-2 bg-gray-900 text-white text-center w-[739px] h-auto '>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, aperiam neque! Quidem quis sed molestias quisquam non ducimus in, dolorum neque recusandae ab accusamus ut! Officiis porro, explicabo alias omnis possimus quia? Soluta natus numquam porro vitae exercitationem ipsam iste atque tempora nostrum, ducimus commodi consectetur quasi nemo expedita
              molestiae?</p>
            <div className='flex justify-between '>

              <button className='bg-black text-red-900 border-4 border-red-800 px-4'> Watch Trailer</button>
              <h1 className=' space-x-5'>

                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>



              </h1>

            </div>



          </div>


        </div>

      </div>
    </div>

  )
}










export default HomePage
