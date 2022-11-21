import './App.css'

function App() {

  return (
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
  )
}

export default App
