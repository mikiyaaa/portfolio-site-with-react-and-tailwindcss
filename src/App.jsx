import './App.css'

function App() {

  return (
    <>
      <header className='border-b border-gray-350'>
        <div className='container mx-auto flex items-center flex-col md:flex-row p-5'>
          <a href='#' className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>Portfolio Site React×TailwindCss</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href='#home' className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href='#about' className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href='#skills' className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href='#blog' className='hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>

      <section className='text-gray-700' id='home'>
        <div className='container flex mx-auto py-20 px-5 flex-col md:flex-row justify-center items-center'>
          <div className='md:w-1/2 md:pr-16 mb-16 lg:pr-24'>
            <h1 className='text-3xl sm:text-5xl text-gray-900 font-medium mb-4'>
                Hi!<br />
                This is Portfolio-Site.<br />
                ~ React & TailwindCss ~
            </h1>
            <p className='mb-8 leading-relaxed'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed consequatur delectus maxime, sint iste saepe natus facilis deserunt rem officia dolorem unde et enim perspiciatis autem provident fugit numquam!
            </p>
            <button className='text-white bg-green-500 px-6 py-2 border-0 rounded text-lg hover:bg-green-700 duration-300'>Contact!!</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg'>
            <img src='../public/icon.jpeg' alt='icon' className=''></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
