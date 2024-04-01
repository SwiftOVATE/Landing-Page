import { MoveDownSection } from "./layout/Animations"

export const WelcomeScreen = () => {
    return (
        <div className="h-screen select-none flex flex-row justify-between align-bottom items-end content-end">
            <MoveDownSection>
                <div className="text-white text-5xl max-lg:text-3xl max-md:text-xl font-bold whitespace-nowrap my-3">
                    Innovate Swiftly
                </div>
            </MoveDownSection>
            <div>
                <img
                    src="https://miro.medium.com/v2/resize:fit:1100/1*5nV87028G6Z7RSVtOwlViQ.png"
                    className=""
                    draggable="false"
                    alt="banner" />
            </div>
        </div>
    )
}