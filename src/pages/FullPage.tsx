import { FadeInSection } from "../components/layout/Animations"
import { Card } from "../components/layout/Card"
import { WelcomeScreen } from "../components/WelcomeScreen"
import { CardsData } from "../constants/CardsData"

export const FullPage = () => {
    return (
        <div className="fullpage h-screen">
            <div className="bg-welcome h-screen">
                <WelcomeScreen />
            </div>
            <div className="flex flex-col justify-between h-screen bg-slate-900">
                <FadeInSection>
                    <div className="text-white text-5xl max-lg:text-3xl max-md:text-xl font-bold whitespace-nowrap my-3">
                        Some of our top products
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
        </div>
    )
}