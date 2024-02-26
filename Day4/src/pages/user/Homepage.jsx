
const Homepage = () => {
  return (
    <div className="bg-slate-950">
   <div className="bg-gradient-to-b from-slate-950 to-indigo-950 rounded-b-[70px]">
        <section className="body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font ml-2 sm:text-4xl text-3xl mb-4 font-medium text-slate-50">Update yourself with 
        <br/> <span className="font-bold bg-gradient-to-b from-yellow-200 to-yellow-400 bg-clip-text text-transparent">NIIT Nexus</span>
      </h1>
      <p className="mb-8 ml-2 leading-relaxed text-slate-300">
Discover courses with ease and streamline your inquiry process with our Online Course Inquiry and Information System, eliminating the hassle of navigating through numerous options and providing comprehensive details at your fingertips.</p>
<a  href="https://icons8.com/icon/Alsmzv0mFxxJ/menu" className="hidden">Menu</a> <a href="https://icons8.com" className="hidden">Icons8</a>
      <div className="flex justify-center">
        <button className="ml-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className=" mr-0  object-cover object-center rounded md-ml-16" alt="hero" src="/imgs/hero-img.png"/>
    </div>
  </div>
</section>
    </div>
    </div>
  )
}

export default Homepage