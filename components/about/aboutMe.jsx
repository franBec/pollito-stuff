import Iframe from 'react-iframe'
import GenericCard from './genericCard'
import ATagWithFormat from '../_utils/aTagWithFormat'
import { BsStars } from 'react-icons/bs'

import Item_workXP from './item_workXP'
import Item_education from './item_education'
import Hr from './../_utils/hr'

const AboutMe = () => {
  return (
    <>
      <GenericCard title={'Who am I?'}>
        <p>
          I do web pages development from the first lines of code to the
          deployment. Working in teams using agile methodologies. Comfortable
          written and oral skills in English. Interested in Cloud application
          development
        </p>
      </GenericCard>
      <GenericCard title={'Work experience'}>
        <Item_workXP
          charge="Backend Developer"
          place="RunaID"
          period="september 2021 - present"
        >
          Main developer behind government projects (mostly the{' '}
          <ATagWithFormat
            goto="https://sigem.sanluislaciudad.gob.ar/sigem/"
            text="SIGEM web page"
            format="underline"
          />
          ). MVC architecture, SQL databases, QA and Production deployments
        </Item_workXP>
        <Hr padding={3} />
        <Item_workXP
          charge="Tutor"
          place="National University of San Luis"
          period="february 2021 - march 2021"
        >
          Tutor of the course{' '}
          <ATagWithFormat
            goto="https://fmn.unsl.edu.ar/curso-de-ingreso-2021-agradecimiento-a-docentes-y-tutores-del-curso-comprension-de-texto/"
            text='"Text Comprehension"'
            format="underline"
          />{' '}
          of the 2021 Entrance to the Faculty of Physical, Mathematical and
          Natural Sciences. I was in charge of 40 applicants
        </Item_workXP>
        <Hr padding={3} />
        <Item_workXP
          charge="Academic Member"
          place="National University of San Luis"
          period="june 2020 - june 2022"
        >
          Member of{' '}
          <ATagWithFormat
            goto="https://drive.google.com/file/d/1RDbr-G7W4yIhd4W4rOOYkyEZVzoDUQ8F/view?usp=sharing"
            text='"Risks in the Network"'
            format="underline"
          />
          , a social interest project extension of the National University of
          San Luis (Page 26)
        </Item_workXP>
      </GenericCard>
      <GenericCard title={'Education'}>
        <Item_education
          education="Computer Engineering"
          place="National University of San Luis"
          period="2018 - 2021"
          completion="64.44% Completed"
          certLink="https://drive.google.com/file/d/1lE_3cnoPvAi6lI8ofx9adbCLKPuDmDYR/view?usp=sharing"
        />
        <div className="mt-2 pl-6">
          <ATagWithFormat
            goto="https://drive.google.com/drive/folders/1zSxWnLsOgo6mX-Mc5iZ7H9VTqfnlc_z6?usp=sharing"
            text="Here are some notes taken from class (Resúmenes by Pollito). These are long documents I made for studying purporses"
            format="li"
          />
          <ATagWithFormat
            goto="https://drive.google.com/drive/folders/1gVO1ehsbmi1hXpiDRUBN-bGELazKcGyH?usp=sharing"
            text="And here are some 'kinda scientific formal and academic' documents I had to made to proof I've learn the content taught"
            format="li"
          />
        </div>
        <Hr padding={3} />
        <Item_education
          education="English Language Training"
          place="Cambridge Institute"
          period="2011 - 2016"
          completion="Complete"
          certLink="https://drive.google.com/file/d/12X09mXTiV4u1rUHvMpcEqR_XzL1tIOoA/view?usp=sharing"
        />
      </GenericCard>
      <GenericCard title={'Certifications and badges'}>
        <Item_education
          education="Node.js: create a full stack system from zero to deploy"
          place="Udemy"
          period="july 2022"
          certLink="https://udemy-certificate.s3.amazonaws.com/pdf/UC-d1127a99-da0a-4e4a-a2b1-e12eb381a394.pdf"
        />
        <br />
        <Item_education
          education="Cloud Digital Leader"
          place="Google"
          period="may 2022"
          certLink="https://www.credential.net/286b807f-51d1-41d0-871a-e914af7fb87d"
        />
        <br />
        <Item_education
          education="Understanding Google Cloud Security and Operations"
          place="Google"
          period="april 2022"
          certLink="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1825709?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        />
        <br />
        <Item_education
          education="Innovating with Data and Google Cloud"
          place="Google"
          period="april 2022"
          certLink="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823373?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        />
        <br />
        <Item_education
          education="Infrastructure and Application Modernization with Google Cloud"
          place="Google"
          period="april 2022"
          certLink="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823577?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        />
        <br />
        <Item_education
          education="Introduction to Digital Transformation with Google Cloud"
          place="Google"
          period="april 2022"
          certLink="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1821618?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        />
        <br />
        <Item_education
          education="Practical SCRUM in Software Projects"
          place="Udemy"
          period="april 2022"
          certLink="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f3e555f6-20e5-4ad9-a4a1-fcd6982930f1.pdf"
        />
        <br />
        <Item_education
          education='Student at "The Fifth Computer School of the Department of
          Computer Science", in the field of the Faculty of Physical,
          Mathematical and Natural Sciences (Pages 10 & 11)'
          place="National University of San Luis"
          period="december 2019"
          certLink="https://drive.google.com/file/d/1YONsZaEpfZCX92k0OfuYJX0h6ACV_UEQ/view?usp=sharing"
        />
        <br />
        <Item_education
          education='Attendant at "The First Computer Science Conference"'
          place="National University of San Luis"
          period="november 2019"
          certLink="https://drive.google.com/file/d/1ZRzNwzuWxHUDomRWSYBb9L4XVDN-y1eO/view?usp=sharing"
        />
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
