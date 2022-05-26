const Mapnt = () => {
  return (
    <div className="mx-auto mb-8 w-fit bg-red-400 bg-opacity-80 py-2 px-4 text-left text-lg md:py-4 md:px-10 md:text-2xl lg:py-6 lg:px-12 lg:text-3xl">
      <h1>Ou sorry but...</h1>
      <p className="mt-1 text-base">
        The random address generation functionality is currently turned off by
        config
      </p>
      <p className="text-base">
        Why? Cause Pollito pays to Google the rights to use the Map and Geocode
        API
      </p>
      <p className="text-base">
        And{' '}
        <span className="italic">
          🎵there ain't nothing in this world for free🎵
        </span>
      </p>
      <div className="text-right text-base italic">
        ~Ain't no rest for the wicked - Cage the Elephant
      </div>
    </div>
  )
}

export default Mapnt
