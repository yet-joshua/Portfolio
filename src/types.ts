export interface ProjectLink {
  label: string
  url: string
  icon?: string
}

export interface Project {
  name: string
  desc: string
  link?: string
  icon?: string
  // Detail modal fields (client projects only)
  hero?: string
  techStack?: string[]
  problem?: string
  solution?: string
  role?: string
  screenshots?: string[]
  links?: ProjectLink[]
  timeline?: string
  tags?: string[]
}
