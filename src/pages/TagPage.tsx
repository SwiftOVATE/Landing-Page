import { Link } from "react-router-dom"
import { Card } from "../components/Card"
import { useEffect, useState } from "react"
import { IMAGE_BASE_URL } from "../constants/URLS"

export const TagPage = () => {
    // fetch url and get the tag
    const url = window.location.href
    const _tag = url.split("/").pop()

    const [combined_data, setCombined_data] = useState<any[]>([localStorage.getItem('combined_data')]);
    const [show, setShow] = useState<boolean>(false)
    const [tag, setTag] = useState<any>('')


    // combined_data.length === 1 &&
    useEffect(() => {
        if (_tag === 'react') {
            setTag('my-react-projects')
        } else if (_tag === 'dotnet') {
            setTag('my-dotnet-projects')
        } else if (_tag === 'python') {
            setTag('my-python-projects')
        } else {
            setTag(_tag)
        }

        const personal_data = JSON.parse(localStorage.getItem('personal_data') || '[{}]')
        const devguide_data = JSON.parse(localStorage.getItem('devguide_data') || '[{}]')
        const swiftovate_data = JSON.parse(localStorage.getItem('swiftovate_data') || '[{}]')

        setCombined_data([...personal_data, ...swiftovate_data, ...devguide_data]);
        setShow(true)
    }, [_tag]);

    return (
        <div className="">
            <div className="flex flex-col justify-between h-screen bg-slate-900">
                <div className="flex flex-col">
                    <div className="text-white text-7xl max-lg:text-6xl max-md:text-5xl font-bold ">
                        Some of our {tag} products
                    </div>
                    <Link to={'/Landing-Page/'}>
                        <p
                            className={`mt-5
                            border-stone-800 text-stone-800 bg-stone-50 hover:text-stone-100 hover:bg-stone-800
                            hover:bg-opacity-80
                            font-bold rounded-full w-fit px-4 py-0.5 z-10`}>
                            {tag}
                            <i className="fas fa-x ml-2"></i>
                        </p>
                    </Link>
                </div>

                <div className="caraosel">
                    {
                        show &&
                        combined_data
                            .filter((card) => card.topics.includes(tag, _tag))
                            .map((card, index) => {
                                return <Card key={index}
                                    name={card.name}
                                    href={card.homepage ? card.homepage : card.html_url}
                                    git={card.html_url}
                                    description={card.description}
                                    image={IMAGE_BASE_URL + card.name + '.png'}
                                    tag={tag} //:TODO :BUG
                                    tagcolor={'border-stone-800 text-stone-800 bg-stone-50 hover:text-stone-100 hover:bg-stone-800'}
                                />
                            })
                    }
                </div>
            </div>
        </div>
    )
}