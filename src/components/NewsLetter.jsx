const NewsLetter = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-800 rounded-2xl overflow-hidden">
        <div className="md:grid md:grid-cols-2 items-center px-6 md:px-16 py-16 md:py-24 gap-10">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
              Subscribe Newsletter
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              enim atque explicabo.
            </p>
          </div>

          {/* Right Column - Input & Button */}
          <div>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full sm:w-auto md:w-full px-4 sm:px-6 py-3 bg-white rounded-xl sm:rounded-l-xl rounded-r-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-500 text-white px-6 sm:px-8 py-3 rounded-xl sm:rounded-l-none cursor-pointer sm:rounded-r-lg"
              >
                Discover
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>
        {`.clip-path-slant{
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }`}
      </style>
    </section>
  );
};

export default NewsLetter;
