import Card from './card'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
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
      />{' '}
      <Card
        icon={faCircleInfo}
        title={'About'}
        description={'Who is Pollito? What is this page?'}
        goTo={'/about'}
      />
    </div>
  )
}

export default Menu
