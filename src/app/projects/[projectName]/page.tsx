// pages/projects/[projectName].tsx

// import { GetStaticPaths, GetStaticProps } from 'next'
// import { projects, Project } from '../../data/projects'

// interface Props { project: Project }

export default function ProjectPage() {
  return (
    <div>
      a
    </div>
  )
}

// getStaticPaths kreira putanju tj stranicu za svaki projekt u projects arrayu
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({
    params: { projectName: p.projectName } 
  }))
  return { paths, fallback: false }
}


// getStaticProps dohvaca podatke za svaki projekt i prosljedjuje ih u komponentu ProjectPage kao {project} prop

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projectName = params?.projectName as string
  const project = projects.find((p) => p.projectName === projectName)

  if (!project) {
    return { notFound: true }
  }

  return { props: { project } }
}
*/
