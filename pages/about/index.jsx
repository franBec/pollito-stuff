import Layout from '../../components/_utils/layout'
import PersonalInfoCard from '../../components/about/personalInfoCard'
import GenericCard from '../../components/about/genericCard'

const index = () => {
  return (
    <Layout
      headTittle="Pollito's stuff | About"
      title={'About Pollito Stuff 🐤'}
      pretitle={'You are viewing...'}
      descriptionRows={['Oh, jai!']}
      signature="Pollito, who knows that 'jai' is written 'hi', but doesn't care"
      displayHomeButton={true}
    >
      <PersonalInfoCard />
      <GenericCard title={'Who am I?'}>
        <p class="leading-normal text-gray-200">
          Hello! I'm Franco (Pollito), a 23 years old programmer from Argentina
          🧉. I studied Computer Engineering from 2018 to 2021, and started
          working in the web development area in mid-late 2021
        </p>
      </GenericCard>
      <GenericCard title={'During the college years...'}>
        <p class="leading-normal text-gray-200">
          I've learned about Logic, Mathematic analisis, General purpose
          software develpment, Data management, and Distributed and parallel
          systems. You can check out different college projects I did in my{' '}
          <a href="https://github.com/franBec" target="_blank">
            Github
          </a>{' '}
          and{' '}
          <a
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
              href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f3e555f6-20e5-4ad9-a4a1-fcd6982930f1.pdf"
              target="_blank"
            >
              Practical SCRUM in Software Projects
            </a>
          </li>
          <li>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1821618?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
              target="_blank"
            >
              Introduction to Digital Transformation with Google Cloud
            </a>
          </li>
          <li>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823577?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
              target="_blank"
            >
              Infrastructure and Application Modernization with Google Cloud
            </a>
          </li>
          <li>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1823373?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
              target="_blank"
            >
              Innovating with Data and Google Cloud
            </a>
          </li>
          <li>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/b4d1ce00-019d-4ec0-8446-c2f412dd0cd1/badges/1825709?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
              target="_blank"
            >
              Understanding Google Cloud Security and Operations
            </a>
          </li>
          <li>
            <a
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
          <a href="https://www.runaid.com.ar/" target="_blank">
            RunaID
          </a>
          , becoming the main developer behind{' '}
          <a href="https://sigem.sanluislaciudad.gob.ar/sigem/" target="_blank">
            SIGEM web page
          </a>
          , where together with a great team we carry out development tasks of
          new functionalities and improvements of existing features
        </p>
      </GenericCard>
      <GenericCard title={"What technologies I'm good at?"}>
        <p class="leading-normal text-gray-200">
          At work, I use the following technology stack:
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a href="https://grails.org/" target="_blank">
              Grails Framework
            </a>
          </li>
          <li>
            HTML5, CSS, Javascript,{' '}
            <a href="https://getbootstrap.com/" target="_blank">
              Bootstrap
            </a>
          </li>
        </ul>
        <p class="mt-2 leading-normal text-gray-200">
          On the other hand, this page is built in{' '}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{' '}
          (or as I like to refer to it, "React++"), what obviously implies
          Node.js and a lot of other things. More on that just below
        </p>
        <p class="mt-2 leading-normal text-gray-200">
          At college I did a lot of general purpose programming, mainly in C and
          Java. Also had to use different languages throughout the college
          courses, from Assembly to PHP
        </p>
        <iframe
          width="600"
          height="600"
          src="https://ionicabizau.github.io/github-profile-languages/api.html?franBec"
          frameborder="0"
        ></iframe>
      </GenericCard>
    </Layout>
  )
}

export default index
