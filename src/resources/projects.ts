import estiloLibreImg from '../assets/EstiloLibre.jpg'
import calendarFlow from '../assets/projectsImages/estiloLibre/calendar/calendarFlow.png'
import inscriptionVideo from '../assets/projectsImages/estiloLibre/inscription/InscriptionVideo.mov'

export interface Project {
  slug: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  link?: string
  github?: string
  image?: string
  features?: string[]
  flows?: Flow[]
  year?: string
  role?: string
}

export interface FlowDetail {
  text: string
  subItems?: string[]
}

interface Flow {
  title: string
  description: string
  details?: (string | FlowDetail)[]
  mainImage?: string
  mainVideo?: string // URL to video file (mp4, webm, etc.)
  detailsImages?: string[]
}

export const projects: Project[] = [
  {
    slug: 'estilo-libre',
    title: 'Estilo Libre - Management System',
    description:
      'Estilo Libre is a management system for a swimming center. It allows the center to manage its students, activities and different classes.',
    longDescription:
      'A comprehensive management platform built for Estilo Libre swimming center. The system streamlines daily operations by providing tools for student enrollment, class scheduling, attendance tracking, and activity management. Built with a focus on usability and reliability to meet real-world business needs.',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    link: 'https://estilo-libre-app-demo.vercel.app/',
    image: estiloLibreImg,
    features: [
      'Student registration and management',
      'Class scheduling and calendar integration',
      'Attendance tracking system',
      'Activity and course management',
      'Responsive design for all devices',
    ],
    flows: [
      {
        title: 'Calendar',
        description:
          'The calendar is the main feature of the app. It allows the user to see the calendar of the center and the classes.',
        details: [
          {
            text: 'Every class is represented by a slot, in which the available places quantity is shown, in addition to different values.',
            subItems: [
              '"Confirmado" represents the amount of students that have confirmed their attendance to the class.',
              '"Probable" represents the amount of students that are likely to attend the class, based on previous inscriptions.',
              '"Eliminable" represents the amount of students that have their last attendance more than 2 weeks ago, being the last ones to consider when filling the calendar.',
            ],
          },
          'By pressing on a specific slot, the user can see the details of the class and the students enrolled in it. Then inside the modal, the user can set the student attendance status.',
          'The toolbar allows the user to trigger different actions.',
          'The "Vista avanzada" switch allows the user to see the calendar in a more detailed view. By default the view mode is basic and the information shown in the calendar is a resume of the current month.',
          'By pressing on the "Dias de cierre" button, a modal is opened, where the user can visualize, edit and add the days of closure for the center.',
          'The "Nueva inscripción" button allows the user to add a new student to the center. This flow is detailed in the next section.',
        ],
        mainImage: calendarFlow,
      },
      {
        title: 'Inscriptions',
        description:
          'The inscription flow allows the user to suscribe a student to a class. The calendar is shown again to let the user see all the slot details, and decide in which one the student can attend. All the inscriptions have a maximum of days, according to the "Membresia" picked.',
        details: [
          'At the top of the page, a warning is shown if the selected student has already a current inscription. If adding the student to any class that is already in the inscription, an error is shown.',
          'The "autocompletar" button, automatically fills all the slots for the selected pattern. This abstraction improves the user experience, not requiring to scroll all the calendar to asign the diferent slots.',
          'If pressing the "Es alternado" checkbox, the student is not mandatory to be assigned to any slot, but a period of days is set and the student can attend the center in any of those days, this is for students that doesnt know yet in which day they can attend the center.',
        ],
        mainVideo: inscriptionVideo,
      },
    ],
    year: '2025',
    role: 'Full Stack Developer',
  },
  {
    slug: 'project-name-3',
    title: 'Project Name 3',
    description:
      'Describe this project and the impact it had. What did you learn? What challenges did you overcome?',
    tags: ['Python', 'FastAPI', 'AWS'],
    link: '#',
  },
  {
    slug: 'project-name-4',
    title: 'Project Name 4',
    description:
      'One more project to showcase your diverse skill set and experience across different domains.',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: '#',
  },
]
