import { useState } from "react"
import { Card } from "./Card"
import { IMAGE_BASE_URL } from "../constants/URLS"

export const SwiftOvateProjects = () => {
    const [projects, setProjects] = useState([])

    const fetchData = async () => {
        console.log('pulling saved data')
        const res = JSON.parse(localStorage.getItem('swiftovate_data') || '[{}]')
        const data = res.filter((p: any) => p.name.includes('.github') === false)
        const project = data
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: project.topics[0],
                    tagcolor: `border-yellow-800 text-yellow-800 bg-yellow-50 hover:text-yellow-50 hover:bg-yellow-800`
                }
            })
        setProjects(project)
    }

    // only fetch data once
    if (projects.length === 0) {
        fetchData()
    }

    return (
        <>
            {projects.map((project: any) => {
                return (
                    <Card
                        name={project.name}
                        git={project.git}
                        href={project.href}
                        description={project.description}
                        image={project.image}
                        language={project.language}
                        tag={project.tag}
                        tagcolor={project.tagcolor}
                        key={project.name}
                    />
                )
            })}
        </>
    )
}