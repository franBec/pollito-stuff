import Layout from '../../components/_utils/layout'
import PersonalInfoCard from '../../components/about/personalInfoCard'
import GenericCard from '../../components/about/genericCard'
import AccordionItem from '../../components/_utils/accordion/accordionItem'
import { useState } from 'react'
import yearsSinceDate from '../../lib/funcs/yearsSinceDate'

const index = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <Layout
      headTittle="Pollito's stuff | About"
      navTitle={'About'}
      introDescriptionRows={['Oh, hi~']}
      introSignature="Nanashi Mumei"
      isThisHome={false}
      introHref="https://youtu.be/4NYsqm2E41k"
    >
      <div className="flex flex-col items-center justify-center">
        <AccordionItem
          title={'About me'}
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <PersonalInfoCard />
          <GenericCard title={'Who am I?'}>
            <p class="leading-normal text-gray-200">
              Hello! I'm Franco (Pollito), a {yearsSinceDate('1999-04-08')}{' '}
              years old programmer from Argentina 🧉. I studied Computer
              Engineering from 2018 to 2021, and started working in the web
              development area in mid-late 2021
            </p>
          </GenericCard>
          <GenericCard title={'During the college years...'}>
            <p class="leading-normal text-gray-200">
              I've learned about Logic, Mathematic analisis, General purpose
              software develpment, Data management, and Distributed and parallel
              systems. You can check out different college projects I did in my{' '}
              <a
                className="underline"
                href="https://github.com/franBec"
                target="_blank"
              >
                Github
              </a>{' '}
              and{' '}
              <a
                className="underline"
                href="https://drive.google.com/drive/folders/1kB1M3XeUrQptLbihhBvKDbFCKrNiEhVm?usp=sharing"
                target="_blank"
              >
                Google Drive folder
              </a>{' '}
              where there are academics reports and summaries
            </p>
          </GenericCard>
          <GenericCard title={'After that...'}>
            <p class="leading-normal text-gray-200">
              I continued gaining knowledge about building web applications,
              obtaining badges and certifications such as...
            </p>
            <ul className="list-inside list-disc">
              <li>
                <a
                  className="underline"
                  href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f3e555f6-20e5-4ad9-a4a1-fcd6982930f1.pdf"
                  target="_blank"
                >
                  Practical SCRUM in Software Projects
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1821618?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                  target="_blank"
                >
                  Introduction to Digital Transformation with Google Cloud
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823577?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                  target="_blank"
                >
                  Infrastructure and Application Modernization with Google Cloud
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823373?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                  target="_blank"
                >
                  Innovating with Data and Google Cloud
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1825709?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                  target="_blank"
                >
                  Understanding Google Cloud Security and Operations
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.credential.net/286b807f-51d1-41d0-871a-e914af7fb87d"
                  target="_blank"
                >
                  Cloud Digital Leader
                </a>
              </li>
            </ul>
          </GenericCard>
          <GenericCard title={'Work experience'}>
            <p class="leading-normal text-gray-200">
              Since September 2021, I am part of the development team in{' '}
              <a
                className="underline"
                href="https://www.runaid.com.ar/"
                target="_blank"
              >
                RunaID
              </a>
              , becoming the main developer behind{' '}
              <a
                className="underline"
                href="https://sigem.sanluislaciudad.gob.ar/sigem/"
                target="_blank"
              >
                SIGEM web page
              </a>
              , where together with a great team we carry out development tasks
              of new functionalities and improvements of existing features
            </p>
          </GenericCard>
          <GenericCard title={"What technologies I'm good at?"}>
            <p class="leading-normal text-gray-200">
              At work, I use the following technology stack:
            </p>
            <ul className="list-inside list-disc">
              <li>
                <a
                  className="underline"
                  href="https://grails.org/"
                  target="_blank"
                >
                  Grails Framework
                </a>
              </li>
              <li>
                HTML5, CSS, Javascript,{' '}
                <a
                  className="underline"
                  href="https://getbootstrap.com/"
                  target="_blank"
                >
                  Bootstrap
                </a>
              </li>
              <li>SQL Server</li>
            </ul>
            <p class="mt-2 leading-normal text-gray-200">
              On the other hand, this page is built in{' '}
              <a
                className="underline"
                href="https://nextjs.org/"
                target="_blank"
              >
                Next.js
              </a>{' '}
              (or as I like to refer to it, "React++"). More on the technologies
              used here just below
            </p>
            <p class="mt-2 leading-normal text-gray-200">
              At college I did a lot of general purpose programming, mainly in C
              and Java. Also had to use different languages throughout the
              college courses, from Assembly to PHP
            </p>
            <iframe
              width="600"
              height="600"
              src="https://ionicabizau.github.io/github-profile-languages/api.html?franBec"
              frameborder="0"
            ></iframe>
          </GenericCard>
        </AccordionItem>
        <AccordionItem
          title={'About this page'}
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <GenericCard title={'What is Pollito Stuff?'}>
            <p class="border-2 border-dashed p-2 leading-normal text-gray-200">
              <span className="font-bold">TL;DR:</span> Is a page where I
              challenge myself to built little web apps using a technology stack
              that I'm not that familiar with, to force me out of the confort
              zone and keep learning
            </p>
            <p class="mt-2 leading-normal text-gray-200">
              Now the full story. After watching{' '}
              <a
                className="underline"
                href="https://youtu.be/FQPlEnKav48"
                target="_blank"
              >
                this video from Fireship
              </a>{' '}
              (great youtube channel, you should check it out), I liked the idea
              of doing React in a more 'organized way'. Previous to get my first
              job, in a series of work interview tests, I was given the task to
              build a to-do app, first in plain Javascript, and then using
              React. And oh boy... the React one was a great disaster. I had to
              learn how to decently do state and component management under 48
              hours, including CRUD operations in mongoDB... and it didn't came
              out very well. It is still in my github, is quite buggy and I'm
              not that proud of it to the point I didn't even bother to properly
              fix it
            </p>
            <p class="mt-2 leading-normal text-gray-200">
              {' '}
              Pollito Stuff 🐤 started as a{' '}
              <span className="italic">
                "Ok now let's learn React properly".
              </span>{' '}
              It became a place where I develop random ideas I have in my head.
              Some are trivial, some are useful, some are just for fun. But the
              goal of all this is facing challenges that I never had before. I'm
              someone who doesn't like to sit still doing nothing
            </p>
          </GenericCard>
          <GenericCard title={'What tenchonologies are used in this page?'}>
            <p class="leading-normal text-gray-200">
              I'm glad you asked! I won't try to explain each one. Instead, I'll
              list them and you can check out their official websites, where I'm
              sure they'll give you a better explanation than the one I could
              give
            </p>
            <div className="mt-2 flex flex-wrap gap-y-1">
              <a
                href="https://nextjs.org/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                Next.js
              </a>
              <a
                href="https://reactjs.org/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                React.js
              </a>
              <a
                href="https://tailwindcss.com/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                tailwindcss
              </a>
              <a
                href="https://fontawesome.com/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                Font Awesome
              </a>
              <a
                href="https://turfjs.org/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                Turf.js
              </a>
              <a
                href="https://babeljs.io/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                Babel
              </a>
              <a
                href="https://mongoosejs.com/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                mongoose
              </a>
              <a
                href="https://www.npmjs.com/package/mongoose-paginate-v2"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                mongoose PAGINATE v2
              </a>
              <a
                href="https://react-hot-toast.com/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                React Hot Toast
              </a>
              <a
                href="https://react-icons.github.io/react-icons/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                React Icons
              </a>
              <a
                href="https://www.npmjs.com/package/react-loading-spin"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                react-loading-spin
              </a>
              <a
                href="https://sweetalert2.github.io/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                sweetalert2
              </a>
              <a
                href="https://swr.vercel.app/"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                swr
              </a>
              <a
                href="https://www.npmjs.com/package/yn"
                class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
                target="_blank"
              >
                yn
              </a>
            </div>
          </GenericCard>
          <GenericCard title={'So.. what next?'}>
            <p class="leading-normal text-gray-200">
              Well... idk. I just do whatever I feel like doing at the moment
              when it comes to this page. Also, I'm planning to take the{' '}
              <a
                className="underline"
                href="https://cloud.google.com/certification/cloud-engineer?hl=es"
                target="_blank"
              >
                Google's Associate Cloud Engineer exam
              </a>{' '}
              sometime soon, I haven't even started studing for it
            </p>
            <p class="mt-2 leading-normal text-gray-200">
              So, do I have any more ideas? Yea sure!
            </p>
            <ul className="list-inside list-disc">
              <li>
                CUIT generator! Is something quite implemented in Random Puntano
                Generator, but I also want it as a standalone feature.{' '}
                <a
                  className="underline"
                  href="http://www0.unsl.edu.ar/~jolguin/cuit.php"
                  target="_blank"
                >
                  Kinda like this UNSL page
                </a>
              </li>
              <li>
                I'd like to add a picture to the random Puntano created. Surely
                will be using{' '}
                <a
                  className="underline"
                  href="https://thispersondoesnotexist.com/image"
                  target="_blank"
                >
                  thispersondoesnotexist
                </a>
              </li>
              <li>
                You know how you can reverse search an image? Also did you know
                about the{' '}
                <a
                  className="underline"
                  href="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books"
                  target="_blank"
                >
                  Anime Girls Holding Programming Books github
                </a>
                ? I think something interesting can be made out of it
              </li>
              <li>
                I'm interested in Vision API, for the idea of extracting text
                out of images
              </li>
              <li>
                I really wanna document all that has be done so far before going
                any further. Making a /about of every main functionality this
                page has at the moment. Right now documentation is null, just
                random comments left in the code
              </li>
            </ul>
          </GenericCard>
        </AccordionItem>
      </div>
    </Layout>
  )
}

export default index
