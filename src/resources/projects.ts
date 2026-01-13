import estiloLibreImg from '../assets/EstiloLibre.jpg'
import calendarFlow from '../assets/projectsImages/estiloLibre/calendar/calendarFlow.png'
import inscriptionVideo from '../assets/projectsImages/estiloLibre/inscription/InscriptionVideo.mov'
import studentsFlowAccess from '../assets/projectsImages/estiloLibre/students/studentsFlowAccess.mov'
import activitiesFlowAccess from '../assets/projectsImages/estiloLibre/activities/activitiesFlowAccess.mov'
import attendancesFlow from '../assets/projectsImages/estiloLibre/attendances/attendancesFlow.png'

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
          'The calendar is the main feature of the app. It allows the user to view the center’s schedule and all available classes.',
        details: [
          {
            text: 'Every class is represented by a slot, in which the available places quantity is shown, in addition to different values:',
            subItems: [
              '"Confirmed" represents the number of students who have confirmed their attendance for the class.',
              '"Probable" represents the number of students who are likely to renew their inscription for the class, based on previous inscriptions. When filling the calendar, this students will be considered the first ones to be enrolled to the class.',
              '"Eliminable" represents the number of students whose last attendance was more than two weeks ago, making them the last ones to be considered when filling the calendar.',
            ],
          },
          'By clicking on a specific slot, the user can view the class details and the list of enrolled students. Inside the modal, the user can also set the student’s attendance status.',
          {
            text: 'The toolbar allows the user to trigger different actions available on the calendar:',
            subItems: [
              'The "Advanced View" switch lets the user see the calendar with more detail. By default, the calendar is shown in a basic view, displaying a summary of the current month.',
              'By clicking the "Closure Days" button, a modal opens where the user can view, edit, and add the center’s closure days.',
              'The "Nueva inscripción" button allows the user to add a new student to the center. This process is explained in the next section.',
            ],
          },
        ],
        mainImage: calendarFlow,
      },
      {
        title: 'Attendances',
        description:
          'By clicking the ‘Attendances’ button in the top navigation bar, you are taken to the Attendances page. This flow allows users to view and manage the center’s attendances, with the ability to filter them by class.',
        details: [
          "This feature let the user view every active student's inscription for the selected class, and let the user change the state for each attendance.",
          'The client wanted to see all student class inscriptions, even if the student is not enrolled in the filtered class. For this reason, not every slot matches the selected class schedule.',
          'The different attendance states are represented by different colors, and the "C" label at the top of the slot, indicates that the student didn\'t attend with the access card.',
        ],
        mainImage: attendancesFlow,
      },

      {
        title: 'Inscriptions',
        description:
          'The Inscriptions flow allows the user to enroll a student in a class. The calendar is displayed again so the user can review all slot details and decide which one the student will attend. Each inscription has a maximum number of days, based on the selected membership.',
        details: [
          'At the top of the page, a warning is displayed if the selected student already has an active inscription. If you try to add the student to a class they are already enrolled in, an error message is shown.',
          'The "Autocompletar" button automatically fills all the slots based on the selected pattern. This feature improves the user experience by avoiding the need to scroll through the entire calendar to assign each slot manually.',
          'When the “Es alternado” checkbox is selected, the student does not need to be assigned to a specific slot. Instead, a date range is defined, allowing the student to attend the center on any of those days. This option is useful for students who are not yet sure which day they can attend.',
        ],
        mainVideo: inscriptionVideo,
      },
      {
        title: 'Students',
        description: "The Students flow allows the user to view and manage the center's students.",
        details: [
          'By clicking on "Ver detalles" a modal is opened, where the user can view the student\'s details and their inscriptions.',
          'By clicking on the "Nueva inscripción" button, the user is redirected to the Inscriptions flow with the student selected.',
        ],
        mainVideo: studentsFlowAccess,
      },
      {
        title: 'Activities',
        description:
          "The Activities flow allows the user to view and manage the center's activities.",
        details: [
          "By clicking on an specific activity, the user can view the activity's different schedules.",
          'By clicking on the "Nueva actividad" button, a drawer is opened, letting the user create a new Activity.',
        ],
        mainVideo: activitiesFlowAccess,
      },
    ],
    year: '2025',
    role: 'Full Stack Developer',
  },
]
