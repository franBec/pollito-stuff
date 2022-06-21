import GenericCard from './genericCard'
import ATagWithFormat from '../_utils/aTagWithFormat'
const AboutThisPage = () => {
  return (
    <>
      <GenericCard title={'What is Pollito Stuff?'}>
        <p className="border-2 border-dashed p-2">
          <span className="font-bold">TL;DR:</span> is a page where I challenge
          myself to built little web apps using a technology stack that I'm not
          that familiar with, to force me out of the confort zone and keep
          learning. Also is a cool portfolio
        </p>
        <br />
        <p>
          Previous to get my first web dev job, in a job interview I was given
          the task to build a to-do app, first in plain Javascript, and then
          using React. And oh boy... the React one was a great disaster. I had
          to learn how to decently do state and component management under 48
          hours, including CRUD operations in mongoDB... and it didn't came out
          very well
        </p>
        <br />
        <p>
          {' '}
          Pollito Stuff 🐤 started as a{' '}
          <span className="italic">
            "Ok now let's learn React properly".
          </span>{' '}
          It became a place where I develop random ideas I have in my head. Some
          are trivial, some are useful, some are just for fun. But the goal of
          all this is facing challenges that I never had before. I'm someone who
          doesn't like to sit still doing nothing
        </p>
      </GenericCard>
      <GenericCard title={'Can I have the code?'}>
        <p>
          Yes of course,{' '}
          <ATagWithFormat
            goto="https://github.com/franBec/pollito-stuff"
            text="Here it is!"
            format="underline"
          />{' '}
          A simple branch (I'm the only dev here so, no need of overengineer
          this repo yet)
        </p>
      </GenericCard>
      <GenericCard title={'So.. what next?'}>
        <p>
          Well... idk. I just do whatever I feel like doing at the moment when
          it comes to this page
        </p>
        <br />
        <p>So, do I have any more ideas? Yea sure!</p>
        <br />
        <ul className="list-inside list-disc">
          <li>
            CUIT generator! Is something quite implemented in Random Puntano
            Generator, but I also want it as a standalone feature.{' '}
            <ATagWithFormat
              goto="http://www0.unsl.edu.ar/~jolguin/cuit.php"
              text="Kinda like this UNSL page"
              format="underline"
            />
          </li>
          <li>
            You know how you can reverse search an image? Also did you know
            about the{' '}
            <ATagWithFormat
              goto="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books"
              text=" Anime Girls Holding Programming Books GitHub repo"
              format="underline"
            />
            ? I think something interesting can be made out of it
          </li>
          <li>
            I'm interested in Vision API, for the idea of extracting text out of
            images
          </li>
          <li>Keep improving the documentation</li>
        </ul>
      </GenericCard>
    </>
  )
}

export default AboutThisPage
