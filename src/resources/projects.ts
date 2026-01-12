import estiloLibreImg from '../assets/EstiloLibre.jpg'
import calendarPage from '../assets/projectsImages/estiloLibre/calendar/calendarPage.png'
import calendarToolbar from '../assets/projectsImages/estiloLibre/calendar/calendarToolbar.png'

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

interface Flow {
  title: string
  description: string
  details: string[]
  mainImage: string
  detailsImages: string[]
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
          'The calendar is the main feature of the app. It allows the user to see the calendar of the center and the classes. By pressing on an specific slot, the user can see the details of the class and the students enrolled in it.',
        details: [
          'The toolbar allows the user to trigger diferent actions.',
          'The "Vista avanzada" switch allows the user to see the calendar in a more detailed view. By default the view mode is basic and the information shown in the calendar is a resume of the current month.',
          'By pressing on the "Dias de cierre" button, a modal is opened, where the user can visualize, edit and add the days of closure for the center.',
          'The "Nueva inscripción" button allows the user to add a new student to the center. This flow is deatailed in the next section.',
        ],
        mainImage: calendarPage,
        detailsImages: [calendarToolbar],
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
