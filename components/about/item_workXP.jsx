const Item_workXP = ({ children, charge, place, period }) => {
  return (
    <>
      <p>
        <span className="font-semibold">{charge}</span>{' '}
        <span className="italic">- {place}</span>
      </p>
      <p>
        <span className="text-xs italic">{period.toUpperCase()}</span>
      </p>
      <p className="mt-2 pl-6 leading-6">{children}</p>
    </>
  )
}

export default Item_workXP
