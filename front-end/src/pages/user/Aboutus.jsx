
const Aboutus = () => {
  return (
    <div className="bg-slate-950">
    <div className="bg-gradient-to-b from-slate-950 to-indigo-950 py-20 rounded-b-[70px]">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-slate-200 font-bold md:text-4xl">Our Team</h2>
            <p className="text-slate-400 lg:w-8/12 lg:mx-auto">
As a team of three enthusiastic computer science students, we are driven by the vision of creating a transformative solution that not only simplifies the process of exploring online courses but also empowers prospective students to make informed decisions, ultimately fostering a more efficient and fulfilling educational journey for learners worldwide.</p>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3 text-slate-200">
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 className="text-2xl font-semibold text-slate-200">Shruthiga K</h4>
                    <span className="block text-sm text-slate-400">Developer</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                <h4 className="text-2xl font-semibold text-slate-200">Samyukta K</h4>
                    <span className="block text-sm text-slate-400">Developer</span>
                </div>
            </div>
            <div className="space-y-4 text-center">
                <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 className="text-2xl font-semibold text-slate-200">Sowndarya S</h4>
                    <span className="block text-sm text-slate-400">Developer</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Aboutus