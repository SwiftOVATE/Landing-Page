import { FadeInSection, MoveDownSection } from "../components/Animations"
import { DevelopmentGuideProjects } from "../components/DevelopmentGuideProjects"
import { GithubProjects } from "../components/GitHubProjects"
import { SwiftOvateProjects } from "../components/SwiftOvateProjects"

export const Home = () => {
    return (
        <div className="fullpage h-screen">
            <div className="bg-welcome h-screen">
                <div className="h-screen select-none flex flex-col justify-center lg:justify-end">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1100/1*5nV87028G6Z7RSVtOwlViQ.png"
                        className=""
                        draggable="false"
                        alt="banner" />
                    <MoveDownSection>
                        <div className="text-white text-7xl max-md:text-6xl max-sm:text-5xl max-lg:text-center font-bold my-3">
                            Innovate Swiftly
                        </div>
                    </MoveDownSection>
                </div>
            </div>

            <div className="flex flex-col justify-around max-lg:justify-center h-screen bg-gradient-to-b from-teal-800 to-cyan-900">
                <FadeInSection>
                    <div className="text-white text-7xl max-md:text-6xl max-sm:text-5xl max-lg:text-center font-bold my-3 cursor-default">
                        Some of our Top Products
                    </div>
                </FadeInSection>
                <div className="caraosel">
                    <SwiftOvateProjects />
                </div>
            </div>

            <div className="flex flex-col justify-around max-lg:justify-center h-screen bg-gradient-to-b from-teal-800 to-cyan-900">
                <FadeInSection>
                    <div className="text-white text-7xl max-md:text-6xl max-sm:text-5xl max-lg:text-center font-bold my-3 cursor-default">
                        Sibling Products from Development-Guide
                    </div>
                </FadeInSection>
                <div className="caraosel">
                    <DevelopmentGuideProjects />
                </div>
            </div>

            <div className="flex flex-col justify-around max-lg:justify-center h-screen bg-gradient-to-b from-teal-800 to-cyan-900">
                <FadeInSection>
                    <div className="text-white text-7xl max-md:text-6xl max-sm:text-5xl max-lg:text-center font-bold my-3 cursor-default">
                        Some of my Projects
                    </div>
                </FadeInSection>
                <div className="caraosel">
                    <GithubProjects />
                </div>
            </div>

        </div>
    )
}