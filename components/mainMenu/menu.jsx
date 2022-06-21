import Card from './card'
import GridTitle from './gridTitle'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <>
      <div>
        <GridTitle text="Stuff you can do!" />
        <div className="grid grid-cols-3 gap-4">
          <Card
            icon={faClipboardList}
            title={'Another Task App'}
            description={
              'Yes! The to-do app that every web developer does at least once'
            }
            goTo={'/anotherTaskApp'}
          />
          <Card
            icon={faDice}
            title={'Random String Generator'}
            description={
              'Create random strings and/or get the length of a block of text'
            }
            goTo={'/randomStringGenerator'}
          />
          <Card
            icon={faPersonCircleQuestion}
            title={'Random Puntano Generator'}
            description={'Create a random person from San Luis... just because'}
            goTo={'/randomPuntanoGenerator'}
          />
        </div>
      </div>
      <div>
        <GridTitle text="Info and documentation" />
        <div className="grid grid-cols-3 gap-4">
          <Card
            icon={faCircleInfo}
            title={'About'}
            description={'Who is Pollito? What is this page?'}
            goTo={'/about'}
          />
          <Card
            icon={faMugHot}
            title={'Docs'}
            description={'Check out the available documentation!'}
            goTo={'/docs'}
          />{' '}
          <Card
            icon={faNoteSticky}
            title={'Release Notes'}
            description={'The commits that make up this project'}
            goTo={'/releaseNotes'}
          />
        </div>
      </div>
    </>
  )
}

export default Menu
