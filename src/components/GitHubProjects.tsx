import { useState } from "react"
import { Card } from "./Card"
import { IMAGE_BASE_URL } from "../constants/URLS"

export const GithubProjects = () => {
    const [projects, setProjects] = useState([])
    const [rprojects, setRProjects] = useState([])
    const [dprojects, setDProjects] = useState([])

    const fetchData = async () => {
        console.log('pulling saved data')
        const data = JSON.parse(localStorage.getItem('personal_data') || '[{}]')
        const project = data
            .filter((project: any) => project.topics.includes('my-depricated-projects') === false)
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: project.topics[0],
                    tagcolor: project.topics[0] === 'react' ?
                        'border-indigo-800 text-indigo-800 bg-indigo-50 hover:text-indigo-50 hover:bg-indigo-800'
                        :
                        project.topics[0] === 'python' ?
                            'border-purple-800 text-purple-800 bg-purple-50 hover:text-purple-50 hover:bg-purple-800'
                            :
                            'border-rose-800 text-rose-800 bg-rose-50 hover:text-rose-50 hover:bg-rose-800'
                }
            })
        setProjects(project)

        const rproject = data
            .filter((project: any) => project.topics.includes('my-react-projects'))
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: 'react',
                    tagcolor: 'border-indigo-800 text-indigo-800 bg-indigo-50 hover:text-indigo-50 hover:bg-indigo-800'
                }
            })
            .reverse()
        setRProjects(rproject)

        const dproject = data
            .filter((project: any) => project.topics.includes('my-dotnet-projects'))
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: 'dotnet',
                    tagcolor: 'border-emerald-800 text-emerald-800 bg-emerald-50 hover:text-emerald-50 hover:bg-emerald-800'
                }
            })
        setDProjects(dproject)
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
            <>
                {rprojects.map((project: any) => {
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
                {dprojects.map((project: any) => {
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
        </>
    )
}