import ATagWithFormat from '../_utils/aTagWithFormat'

const Item_education = ({ education, place, period, completion, certLink }) => {
  return (
    <>
      <p>
        <span className="font-semibold">
          <ATagWithFormat goto={certLink} text={education} format="underline" />
        </span>{' '}
        <span className="italic">- {place}: </span>
        <span>
          {period.toUpperCase()} {completion && `(${completion})`}
        </span>
      </p>
    </>
  )
}

export default Item_education
