import { Link } from "react-router-dom"
import { FadeInSection } from "./Animations"

export const Card = (props: any) => {
    return (
        <FadeInSection>
            <a
                href={props.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col">
                <div className="w-fit h-fit shrink-0 hover:scale-105 bg-white p-5 m-5 hover:shadow-slate-600 shadow-lg z-0">
                    <img src={props.image} className="w-52 h-32" />
                    <h1 className="text-xl font-bold">{props.name}</h1>
                    <h2 className="text-lg w-48">{props.description}</h2>

                    <Link to={'/Landing-Page/Tag/' + props.tag}>
                        <p
                            className={`mt-2 
                    ${props.tagcolor}
                     hover:bg-opacity-80
                     font-bold text-white rounded-full w-fit px-4 py-0.5 z-10`}>
                            {props.tag}
                        </p>
                    </Link>
                </div>
            </a>
        </FadeInSection>
    )
}