import ATagWithFormat from '../../_utils/aTagWithFormat'
const Mapnt = () => {
  return (
    <div className="mx-auto mb-8 w-fit bg-oldMap">
      <div className="bg-slate-900 bg-opacity-70 py-2 px-4 text-left text-lg md:py-4 md:px-10 md:text-2xl lg:py-6 lg:px-12 lg:text-3xl">
        <p className="mt-1">
          The random address generation functionality is currently turned off by
          config
        </p>
        <p className="">
          Why? Cause Pollito pays to Google the rights to use the Map and
          Geocode API
        </p>
        <p className="">
          And{' '}
          <ATagWithFormat
            goto="https://youtu.be/HKtsdZs9LJo"
            format="underline"
            text="🎵there ain't nothing in this world for free🎵"
          />
        </p>
      </div>
    </div>
  )
}

export default Mapnt
