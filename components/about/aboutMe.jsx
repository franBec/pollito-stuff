import Iframe from 'react-iframe'
import yearsSinceDate from '../../lib/funcs/yearsSinceDate'
import GenericCard from './genericCard'
import ATagWithFormat from '../_utils/aTagWithFormat'
import { BsStars } from 'react-icons/bs'

const AboutMe = () => {
  return (
    <>
      <GenericCard title={'Who am I?'}>
        <p>
          Hello! I'm Franco (Pollito), a {yearsSinceDate('1999-04-08')} years
          old programmer from Argentina 🧉. I studied Computer Engineering from
          2018 to 2021, and started working in the web development area in
          mid-late 2021
        </p>
      </GenericCard>
      <GenericCard title={'Academic background'}>
        <p className="border-2 border-dashed p-2 text-center text-sm">
          You can click on each item to check more info about it
        </p>
        <br />
        <>
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
            text="Computer Engineering Student at the National University of San Luis"
            format="li"
          />
          <ATagWithFormat
            goto="https://drive.google.com/drive/folders/1zSxWnLsOgo6mX-Mc5iZ7H9VTqfnlc_z6?usp=sharing"
            text="Here are some notes taken from class (Resúmenes by Pollito). These are long documents I made for studying purporses"
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
          2020 - 2022
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
        </>
      </GenericCard>
      <GenericCard title={'Work experience'}>
        <p>
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
          , where together with a great team we carry out development tasks of
          new functionalities and improvements of existing features
        </p>
        <br />
        <p className="text-sm">
          **Random fact: During summer 2017 I was a waiter at a San Luis City
          café ☕
        </p>
      </GenericCard>
      <GenericCard title={"What technologies I'm familiar with?"}>
        <div className="border-2 border-dashed p-4 leading-normal">
          <p className="text-xl font-semibold">~At college...</p>
          <br />
          <p>
            I did a lot of general purpose not web related programming, mainly
            in C and Java, but also had to write code in other languages. Check
            out the graphic just below!
          </p>
        </div>
        <br />
        <div className="border-2 border-dashed p-4">
          <p className="text-xl font-semibold">~At work...</p>
          <br />
          <p>I'm daily dealing with the following technology stack:</p>
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
        <div className="border-2 border-dashed p-4">
          <p className="text-xl font-semibold">~This page...</p>
          <br />
          <p>
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
          <br />
          <p>
            Oh, and the{' '}
            <span className="italic">
              <BsStars className="inline-block" />
              aesthetic
              <BsStars className="inline-block" />
            </span>{' '}
            is thanks to{' '}
            <ATagWithFormat
              goto="https://tailwindcss.com/"
              text="Tailwind CSS"
              format="underline"
            />
          </p>
        </div>
        <br />

        <div className="flex justify-center">
          <p className="text-xl font-semibold">~My GitHub repo's languages</p>
        </div>
        <Iframe
          url="https://ionicabizau.github.io/github-profile-languages/api.html?franBec"
          height="700px" //couldnt make it dinamic yet
          width="100%"
          className="bg-slate-300 bg-opacity-20"
          position="relative"
        />
      </GenericCard>
    </>
  )
}

export default AboutMe
