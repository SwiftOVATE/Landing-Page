import { Link } from "react-router-dom"
import { Card } from "../components/layout/Card"
import { CardsData } from "../constants/CardsData"

export const TagPage = () => {
    // fetch url and get the tag
    const url = window.location.href
    const tag = url.split("/").pop()

    //fetch the tag from the url and filter the cards
    const props = CardsData.find((card) => card.tag === tag)

    return (
        <div className="fullpage h-screen">
            <div className="flex flex-col justify-between h-screen bg-slate-900">
                <div className="flex flex-col">
                    <div className="text-white text-5xl max-lg:text-3xl max-md:text-xl font-bold whitespace-nowrap">
                        Some of our {tag} products
                    </div>
                    <Link to={'/Landing-Page/'}>
                        <p
                            className={`mt-5
                            ${props?.tagcolor}
                            hover:bg-opacity-80
                            font-bold text-white rounded-full w-fit px-4 py-0.5 z-10`}>
                            {props?.tag}
                            <i className="fas fa-x ml-2"></i>
                        </p>
                    </Link>
                </div>

                <div className="caraosel">
                    {
                        CardsData
                            .filter((card) => card.tag === tag)
                            .map((card, index) => {
                                return <Card key={index}
                                    name={card.name}
                                    href={card.href}
                                    description={card.description}
                                    image={card.image}
                                    tag={card.tag}
                                    tagcolor={card.tagcolor}
                                />
                            })
                    }
                </div>
            </div>
        </div>
    )
}