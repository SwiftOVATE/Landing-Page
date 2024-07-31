import { useState } from "react"
import { Card } from "./Card"
import { FadeInSection } from "./Animations"
import { DEVELOPMENTGUIDE_URL, IMAGE_BASE_URL } from "../constants/URLS";

export const DevelopmentGuideProjects = () => {
    const [projects, setProjects] = useState([]);
    const [moreProjects, setmoreProjects] = useState([]);
    const [aprojects, setAProjects] = useState([]);
    const [archivedshow, setArchivedShow] = useState(false);
    const [proShow, setProShow] = useState(false);

    const url = DEVELOPMENTGUIDE_URL;

    const fetchData = async () => {
        console.log('fetching data')
        const response = await fetch(url)
        const res = await response.json()
        const data = res.filter((p: any) => p.name.includes('.github') === false)
        const project = data
            .filter((project: any) => project.topics.includes('pro-start'))
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage.replace('projecttutorials', 'DevelopmentGuide') : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: project.topics[0],
                    tagcolor: 'border-rose-800 text-rose-800 bg-rose-50 hover:text-rose-50 hover:bg-rose-800'
                }
            })
        setProjects(project)

        const moreProject = data
            .filter((project: any) => project.topics.includes('project-tutorials-archive') === false)
            .filter((project: any) => project.topics.includes('pro-start') === false)
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage.replace('projecttutorials', 'DevelopmentGuide') : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: project.topics[0],
                    tagcolor: 'border-indigo-800 text-indigo-800 bg-indigo-50 hover:text-indigo-50 hover:bg-indigo-800'
                }
            })
        setmoreProjects(moreProject)

        const aproject = data
            .filter((project: any) => project.topics.includes('project-tutorials-archive'))
            .map((project: any) => {
                return {
                    name: project.name,
                    href: project.homepage ? project.homepage.replace('projecttutorials', 'DevelopmentGuide') : project.html_url,
                    git: project.html_url,
                    description: project.description,
                    image: IMAGE_BASE_URL + project.name + '.png',
                    language: project.language,
                    tag: project.topics[0],
                    tagcolor: 'border-emerald-800 text-emerald-800 bg-emerald-50 hover:text-emerald-50 hover:bg-emerald-800'
                }
            })
        setAProjects(aproject)
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
            {
                proShow ?
                    <>
                        {moreProjects.map((project: any) => {
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
                    :
                    <FadeInSection>
                        <div
                            onClick={() => setProShow(true)}
                            className="cursor-pointer w-fit h-fit shrink-0 hover:scale-105 bg-slate-50 border-2 border-neutral-600 p-5 m-5 hover:shadow-md z-0 group rounded-lg text-xl font-bold">
                            <h3>More Projects</h3>
                            <h4 className="text-center">
                                <i className="fas fa-arrow-right"></i>
                            </h4>
                        </div>
                    </FadeInSection>
            }
            {
                archivedshow ?
                    <>
                        {aprojects.map((project: any) => {
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
                    :
                    <FadeInSection>
                        <div
                            onClick={() => setArchivedShow(true)}
                            className="cursor-pointer w-fit h-fit shrink-0 hover:scale-105 bg-slate-50 border-2 border-neutral-600 p-5 m-5 hover:shadow-md z-0 group rounded-lg text-xl font-bold">
                            <h3>Archived Projects</h3>
                            <h4 className="text-center">
                                <i className="fas fa-arrow-right"></i>
                            </h4>
                        </div>
                    </FadeInSection>
            }
        </>
    )
}