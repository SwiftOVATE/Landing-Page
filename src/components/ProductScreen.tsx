import { CardsData } from "../constants/CardsData"
import { FadeInSection } from "./layout/Animations"
import { Card } from "./layout/Card"

export const ProductScreen = () => {
    return (
        <div className="flex flex-col justify-between max-lg:justify-center h-screen bg-slate-900">
            <FadeInSection>
                <div className="text-white text-7xl max-md:text-5xl max-sm:text-3xl max-lg:text-center font-bold my-3">
                    Some of our Top Products
                </div>
            </FadeInSection>
            <div className="caraosel">
                {
                    CardsData.map((card, index) => {
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
    )
}