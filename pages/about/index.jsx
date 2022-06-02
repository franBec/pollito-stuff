import Layout from '../../components/_utils/layout'
import PersonalInfoCard from '../../components/about/personalInfoCard'
import GenericCard from '../../components/about/genericCard'
import AccordionItem from '../../components/_utils/accordion/accordionItem'
import { useState } from 'react'
import yearsSinceDate from '../../lib/funcs/yearsSinceDate'
import ATagWithFormat from '../../components/about/aTagWithFormat'

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
            <p class="leading-normal">
              Hello! I'm Franco (Pollito), a {yearsSinceDate('1999-04-08')}{' '}
              years old programmer from Argentina 🧉. I studied Computer
              Engineering from 2018 to 2021, and started working in the web
              development area in mid-late 2021
            </p>
          </GenericCard>
          <GenericCard title={'Academic background'}>
            <p className="border-2 border-dashed p-2 text-center text-sm leading-normal">
              You can click on each item to check more info about it
            </p>
            <br />
            <p class="leading-normal">
              <ATagWithFormat
                goto="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/niveles-educativos"
                text="Argentine mandatory education (educación incial, primaria,
                secundaria)"
                format="li"
              />
              <br />
              2011 - 2016
              <ATagWithFormat
                goto="https://drive.google.com/file/d/10bYZN6nPLOHhRuUT6t665rS2GMsJGMhk/view?usp=sharing"
                text="English language training"
                format="li"
              />
              <br />
              2018 - 2021
              <ATagWithFormat
                goto="https://drive.google.com/file/d/1lE_3cnoPvAi6lI8ofx9adbCLKPuDmDYR/view?usp=sharing"
                text="Computer Engineering Student"
                format="li"
              />
              <br />
              2019
              <ATagWithFormat
                goto="https://drive.google.com/file/d/1ZRzNwzuWxHUDomRWSYBb9L4XVDN-y1eO/view?usp=sharing"
                text='Attendant at "The First Computer Science Conference" organized by
                the Student Center of the Faculty of Physical, Mathematical and
                Natural Sciences'
                format="li"
              />
              <ATagWithFormat
                goto="https://drive.google.com/file/d/1YONsZaEpfZCX92k0OfuYJX0h6ACV_UEQ/view?usp=sharing"
                text='Student at "The Fifth Computer School of the Department of
                Computer Science", in the field of the Faculty of Physical,
                Mathematical and Natural Sciences (Pages 10 & 11)'
                format="li"
              />
              <br />
              2020
              <ATagWithFormat
                goto="https://drive.google.com/file/d/1RDbr-G7W4yIhd4W4rOOYkyEZVzoDUQ8F/view?usp=sharing"
                text='Member of "Risks in the Network", a social interest project extension of the
                National University of San Luis (Page 26)'
                format="li"
              />
              <br />
              2021
              <ATagWithFormat
                goto="https://fmn.unsl.edu.ar/curso-de-ingreso-2021-agradecimiento-a-docentes-y-tutores-del-curso-comprension-de-texto/"
                text='Tutor of the course "Text Comprehension" of the 2021 Entrance to
                the Faculty of Physical, Mathematical and Natural Sciences (yep, sadly the only evidence left is a post in the uni webpage)'
                format="li"
              />
              <br />
              2022
              <ATagWithFormat
                goto="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f3e555f6-20e5-4ad9-a4a1-fcd6982930f1.pdf"
                text="Practical SCRUM in Software Projects"
                format="li"
              />
              <ATagWithFormat
                goto="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1821618?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                text="Introduction to Digital Transformation with Google Cloud"
                format="li"
              />
              <ATagWithFormat
                goto="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823577?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                text="Infrastructure and Application Modernization with Google Cloud"
                format="li"
              />
              <ATagWithFormat
                goto="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823373?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                target="_blank"
                text="Innovating with Data and Google Cloud"
                format="li"
              />
              <ATagWithFormat
                goto="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1825709?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
                target="_blank"
                text="Understanding Google Cloud Security and Operations"
                format="li"
              />
              <ATagWithFormat
                goto="https://www.credential.net/286b807f-51d1-41d0-871a-e914af7fb87d"
                text="Cloud Digital Leader"
                format="li"
              />
            </p>
          </GenericCard>

          <GenericCard title={'Work experience'}>
            <p class="leading-normal">
              Since September 2021, I am part of the development team in{' '}
              <ATagWithFormat
                goto="https://www.runaid.com.ar/"
                text="RunaID"
                format="underline"
              />
              , becoming the main developer behind{' '}
              <ATagWithFormat
                goto="https://sigem.sanluislaciudad.gob.ar/sigem/"
                text="SIGEM web page"
                format="underline"
              />
              , where together with a great team we carry out development tasks
              of new functionalities and improvements of existing features
            </p>
            <p className="mt-2 text-sm leading-normal">
              **Random fact: During summer 2017 I was a waiter at a San Luis
              City café ☕
            </p>
          </GenericCard>
          <GenericCard title={"What technologies I'm familiar with?"}>
            <div class="border-2 border-dashed p-4 leading-normal">
              <p class="text-xl font-semibold leading-normal">~At college...</p>
              <br />
              <p class="leading-normal">
                I did a lot of general purpose not web related programming,
                mainly in C and Java, but also had to write code in other
                languages. Check out the graphic just below!
              </p>
            </div>
            <br />
            <div class="border-2 border-dashed p-4 leading-normal">
              <p class="text-xl font-semibold leading-normal">~At work...</p>
              <br />
              <p class="leading-normal">
                I'm daily dealing with the following technology stack:
              </p>
              <br />
              <ul className="list-inside list-disc">
                <li>
                  <ATagWithFormat
                    goto="https://grails.org/"
                    text="Grails"
                    format="underline"
                  />
                  , a Java web development framework that follows the{' '}
                  <ATagWithFormat
                    goto="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"
                    text="MVC architectural pattern"
                    format="underline"
                  />
                </li>
                <li>HTML5, CSS, Javascript, Bootstrap</li>
                <li>SQL Server</li>
              </ul>
            </div>
            <br />
            <div class="border-2 border-dashed p-4 leading-normal">
              <p class="text-xl font-semibold leading-normal">~This page...</p>
              <br />
              <p class="leading-normal">
                Is built in{' '}
                <ATagWithFormat
                  goto="https://nextjs.org/"
                  text="Next.js"
                  format="underline"
                />
                , a very different approach. It allows to build entire fullstack
                applications in Javascript with both server-side and client-side
                code coupled together, a thing that MVC and its separation of
                concerns philosophy go against
              </p>
            </div>
            <br />
            <div className="flex justify-center">
              <p className="text-xl leading-normal">
                ~Graphic of the languages in my GitHub repos~
              </p>
            </div>
            <div className="flex justify-center">
              <iframe
                width="600"
                height="600"
                src="https://ionicabizau.github.io/github-profile-languages/api.html?franBec"
                frameborder="0"
                className="bg-slate-300 bg-opacity-20"
              ></iframe>
            </div>
          </GenericCard>
        </AccordionItem>
        <AccordionItem
          title={'About this page'}
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <GenericCard title={'What is Pollito Stuff?'}>
            <p class="border-2 border-dashed p-2 leading-normal">
              <span className="font-bold">TL;DR:</span> is a page where I
              challenge myself to built little web apps using a technology stack
              that I'm not that familiar with, to force me out of the confort
              zone and keep learning. Also is a cool portfolio
            </p>
            <br />
            <p class="leading-normal">
              Previous to get my first web dev job, in a job interview I was
              given the task to build a to-do app, first in plain Javascript,
              and then using React. And oh boy... the React one was a great
              disaster. I had to learn how to decently do state and component
              management under 48 hours, including CRUD operations in mongoDB...
              and it didn't came out very well
            </p>
            <br />
            <p class="leading-normal">
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
          <GenericCard title={'Can I have the code?'}>
            <p class="leading-normal">
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
            <p class="leading-normal">
              Well... idk. I just do whatever I feel like doing at the moment
              when it comes to this page
            </p>
            <br />
            <p class="leading-normal">
              So, do I have any more ideas? Yea sure!
            </p>
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
                I'd like to add a picture to the random Puntano created. Surely
                will be using{' '}
                <ATagWithFormat
                  goto="https://thispersondoesnotexist.com/image"
                  text="thispersondoesnotexist"
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
                I'm interested in Vision API, for the idea of extracting text
                out of images
              </li>
              <li>
                I really wanna document all that has be done so far before going
                any further. Making a '/about' of every main functionality this
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
