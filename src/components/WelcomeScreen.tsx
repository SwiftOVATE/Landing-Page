import { MoveDownSection } from "./layout/Animations"

export const WelcomeScreen = () => {
    return (
        <div className="bg-welcome h-screen">
            <div className="h-screen select-none flex flex-col justify-center lg:justify-end">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1100/1*5nV87028G6Z7RSVtOwlViQ.png"
                        className=""
                        draggable="false"
                        alt="banner" />
                <MoveDownSection>
                    <div className="text-white text-7xl max-md:text-5xl max-sm:text-3xl max-lg:text-center font-bold my-3">
                        Innovate Swiftly
                    </div>
                </MoveDownSection>
            </div>
        </div>
    )
}