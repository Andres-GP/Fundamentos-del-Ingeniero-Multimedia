import type { Section, MediaType, Characteristic, AreaFormacion, ProfessionalRole, NavItem } from '@/types'

export const SECTIONS: Section[] = [
  { id: 'inicio', title: 'Inicio', shortTitle: 'Inicio' },
  { id: 'definicion-multimedia', title: 'Definicion de Multimedia', shortTitle: 'Multimedia' },
  { id: 'definicion-ingenieria', title: 'Definicion de Ingenieria Multimedia', shortTitle: 'Ingenieria' },
  { id: 'caracteristicas', title: 'Caracteristicas de los Sistemas Multimedia', shortTitle: 'Caracteristicas' },
  { id: 'areas-formacion', title: 'Areas de Formacion', shortTitle: 'Areas' },
  { id: 'rol-ingeniero', title: 'Rol del Ingeniero Multimedia', shortTitle: 'Rol' },
  { id: 'recursos', title: 'Recursos', shortTitle: 'Recursos' },
]

export const NAV_ITEMS: NavItem[] = SECTIONS.map(section => ({
  id: section.id,
  label: section.shortTitle,
  href: `#${section.id}`,
}))

export const MEDIA_TYPES: MediaType[] = [
  {
    id: 'text',
    name: 'Texto',
    description: 'Contenido escrito que transmite informacion mediante palabras y caracteres.',
    icon: 'FileText',
  },
  {
    id: 'image',
    name: 'Imagen',
    description: 'Representaciones visuales estaticas como fotografias, ilustraciones y graficos.',
    icon: 'Image',
  },
  {
    id: 'audio',
    name: 'Audio',
    description: 'Contenido sonoro incluyendo musica, efectos de sonido y narraciones.',
    icon: 'Music',
  },
  {
    id: 'video',
    name: 'Video',
    description: 'Secuencias de imagenes en movimiento con o sin audio sincronizado.',
    icon: 'Video',
  },
  {
    id: 'animation',
    name: 'Animacion',
    description: 'Graficos en movimiento creados digitalmente para simular movimiento.',
    icon: 'Sparkles',
  },
]

export const CHARACTERISTICS: Characteristic[] = [
  {
    id: 'interactivity',
    title: 'Interactividad',
    description: 'Permite al usuario interactuar con el contenido, tomando decisiones que afectan la experiencia. El sistema responde a las acciones del usuario en tiempo real.',
    icon: 'MousePointerClick',
  },
  {
    id: 'branching',
    title: 'Ramificacion',
    description: 'El contenido se organiza de forma no lineal, permitiendo multiples caminos y experiencias personalizadas segun las elecciones del usuario.',
    icon: 'GitBranch',
  },
  {
    id: 'transparency',
    title: 'Transparencia',
    description: 'La tecnologia se vuelve invisible para el usuario, permitiendo una experiencia fluida y natural sin barreras tecnicas evidentes.',
    icon: 'Eye',
  },
  {
    id: 'navigation',
    title: 'Navegacion',
    description: 'Sistemas de orientacion que permiten al usuario moverse facilmente entre diferentes secciones y contenidos del producto multimedia.',
    icon: 'Compass',
  },
]

export const AREAS_FORMACION: AreaFormacion[] = [
  {
    id: 'videogames',
    title: 'Videojuegos',
    description: 'Desarrollo de experiencias interactivas de entretenimiento, desde juegos moviles hasta producciones AAA.',
    icon: 'Gamepad2',
    link: 'https://www.unad.edu.co',
  },
  {
    id: 'multimedia-apps',
    title: 'Aplicaciones Multimedia',
    description: 'Creacion de software interactivo que integra multiples tipos de medios para diversos propositos.',
    icon: 'AppWindow',
    link: 'https://www.unad.edu.co',
  },
  {
    id: 'animation-2d-3d',
    title: 'Animacion 2D/3D',
    description: 'Produccion de contenido animado para cine, television, publicidad y medios digitales.',
    icon: 'Clapperboard',
    link: 'https://www.unad.edu.co',
  },
  {
    id: 'educational-content',
    title: 'Contenido Educativo',
    description: 'Desarrollo de materiales didacticos interactivos y plataformas de aprendizaje digital.',
    icon: 'GraduationCap',
    link: 'https://www.unad.edu.co',
  },
  {
    id: 'multimedia-marketing',
    title: 'Marketing Multimedia',
    description: 'Creacion de campanas publicitarias digitales, contenido para redes sociales y experiencias de marca.',
    icon: 'Megaphone',
    link: 'https://www.unad.edu.co',
  },
]

export const PROFESSIONAL_ROLES: ProfessionalRole[] = [
  {
    id: 'project-manager',
    title: 'Director de Proyectos',
    description: 'Lidera equipos multidisciplinarios y coordina el desarrollo de productos multimedia desde la concepcion hasta la entrega.',
  },
  {
    id: 'developer',
    title: 'Desarrollador Multimedia',
    description: 'Programa aplicaciones interactivas, videojuegos y experiencias digitales utilizando diversas tecnologias.',
  },
  {
    id: 'consultant',
    title: 'Consultor Tecnologico',
    description: 'Asesora a organizaciones en la implementacion de soluciones multimedia y estrategias digitales.',
  },
  {
    id: 'ux-designer',
    title: 'Disenador UX/UI',
    description: 'Crea interfaces intuitivas y experiencias de usuario memorables para productos digitales.',
  },
  {
    id: 'content-creator',
    title: 'Creador de Contenido',
    description: 'Produce material audiovisual, animaciones y recursos graficos para diversos medios y plataformas.',
  },
  {
    id: 'educator',
    title: 'Educador Digital',
    description: 'Desarrolla y facilita experiencias de aprendizaje utilizando tecnologias multimedia.',
  },
]

export const EXTERNAL_LINKS = {
  unad: 'https://www.unad.edu.co',
  programa: 'https://estudios.unad.edu.co/ingenieria-multimedia',
  recursos: 'https://biblioteca.unad.edu.co',
}
