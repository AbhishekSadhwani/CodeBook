export const Testimonial = () => {
    return (
      <section className="my-20">
        <h1 className="mb-5 text-center text-2xl font-bold underline underline-offset-8 text-gray-900 dark:text-white">Students About CodeBook</h1>
        <div className="mb-8 grid md:mb-12 md:grid-cols-2 border border-gray-200 shadow-sm rounded-lg dark:border-gray-700">        
          <figure className="flex flex-col justify-center items-center text-center p-8 bg-white border-b border-gray-200 rounded-t-lg md:border-r md:rounded-t-none md:rounded-tl-lg dark:border-gray-700 dark:bg-gray-800">
              <blockquote className="mx-auto mb-4 lg:mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                  <p className="my-4 font-normal">If you care for your time, I hands down would go with this."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                  <div className="text-left">
                      <p className="font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Developer at Random AI</p>
                  </div>
              </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center text-center p-8 bg-white border-b border-gray-200 rounded-tr-lg dark:border-gray-700 dark:bg-gray-800">
              <blockquote className="mx-auto mb-4 lg:mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                  <p className="my-4 font-normal">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                  <div className="text-left">
                      <p className="font-medium text-gray-900 dark:text-white">Roberta Casas</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Random</p>
                  </div>
              </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center text-center p-8 bg-white border-b border-gray-200 rounded-t-lg md:border-r md:rounded-t-none md:rounded-bl-lg dark:border-gray-700 dark:bg-gray-800">
              <blockquote className="mx-auto mb-4 lg:mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                  <p className="my-4 font-normal">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                  <div className="text-left">
                      <p className="font-medium text-gray-900 dark:text-white">Jese Leos</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Random</p>
                  </div>
              </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center text-center p-8 bg-white border-b border-gray-200 rounded-br-lg dark:border-gray-700 dark:bg-gray-800">
              <blockquote className="mx-auto mb-4 lg:mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                  <p className="my-4 font-normal">You have many examples that can be used to create a fast prototype for your team."</p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                  <div className="text-left">
                      <p className="font-medium text-gray-900 dark:text-white">Joseph McFall</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CTO at Random</p>
                  </div>
              </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  