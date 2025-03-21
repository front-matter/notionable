import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImageURL from '../public/images/mfenner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faMastodon,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const people = [
  {
    name: 'Martin Fenner',
    role: 'Founder',
    emailUrl: 'mailto:martin@front-matter.io',
    imageUrl: ImageURL,
    bio:
      'Martin was Technical Director of the DOI registration agency DataCite from August 2015 to July 2021, and technical lead for the article-level metrics project at Open Access publisher PLOS from May 2012 until July 2015. He was founding member of the Open Researcher and Contributor Identifier (ORCID) board from 2010 to 2012. Martin has studied Medicine at the Free University Berlin and is board-certified in internal medicine and oncology. Martin has more than 15 years of experience in software development (PHP, Ruby, Python, Javascript, and Go) and in running scholarly infrastructure at scale.',
    mastodonUrl: 'https://hachyderm.io/@mfenner',
    githubUrl: 'https://github.com/mfenner',
    linkedinUrl: 'https://www.linkedin.com/in/mfenner'
  }
  // More people...
]

export default function Team() {
  return (
    <div className='bg-white'>
      <div className='container flex mx-auto py-12 px-16 max-w-7xl sm:px-6 lg:px-16'>
        <div className='space-y-12 lg:grid lg:gap-8 lg:space-y-0'>
          <div className='space-y-5 sm:space-y-4'>
            <h2 className='text-3xl font-extrabold text-green-600'>Team</h2>
          </div>
          <div className='lg:col-span-2'>
            <ul className='space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0'>
              {people.map((person) => (
                <li key={person.name} className='sm:py-8 list-none'>
                  <div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
                    <div className='aspect-w-2 aspect-h-2 sm:aspect-w-2 sm:aspect-h-2'>
                      <Image
                        className='object-cover shadow-lg rounded-lg'
                        src={person.imageUrl}
                        alt='person.name'
                      />
                    </div>
                    <div className='sm:col-span-2'>
                      <div className='space-y-4'>
                        <div className='text-lg leading-6 font-medium space-y-1'>
                          <h3>{person.name}</h3>
                          <p className='text-green-600 font-sans'>
                            {person.role}
                          </p>
                        </div>
                        <div className='text-lg'>
                          <p className='text-gray-500'>{person.bio}</p>
                        </div>
                        <ul className='flex space-x-5 mt-1 list-none'>
                          <li>
                            <Link href={person.emailUrl} className='text-gray-500 hover:text-gray-400 border-b-0'>
                              <span className='sr-only'>Email</span>
                              <FontAwesomeIcon icon={faEnvelope} />
                            </Link>
                          </li>
                          <li>
                            <Link href={person.mastodonUrl} className='text-gray-500 hover:text-gray-400 border-b-0'>
                              <span className='sr-only'>Mastodon</span>
                              <FontAwesomeIcon icon={faMastodon} />
                            </Link>
                          </li>
                          <li>
                            <Link href={person.githubUrl}
                              className='text-gray-500 hover:text-gray-400 border-b-0'
                            >
                              <span className='sr-only'>GitHub</span>
                              <FontAwesomeIcon icon={faGithub} />
                            </Link>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className='text-gray-400 hover:text-gray-500'
                            >
                              <span className='sr-only'>LinkedIn</span>
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
