import { Link } from "react-router-dom"
import { FadeInSection } from "./Animations"

export const Card = (props: any) => {
    return (
        <FadeInSection>
            <div className="w-fit h-fit shrink-0 hover:scale-105 rounded-lg bg-white m-5 hover:shadow-slate-600 shadow-lg z-0">
                <a
                    href={props.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex group flex-col p-5">
                    {
                        props.image === '' ?
                            <></> :
                            <img src={props.image} alt="logo" className="w-52 h-32" />
                    }
                    <h1 className="text-xl font-bold">
                        {props.name}
                        <i className="fas fa-external-link-alt ml-2 opacity-0 group-hover:opacity-100"></i>

                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={props.git}>
                            <i className="fab fa-github ml-2 opacity-0 group-hover:opacity-100 hover:text-blue-700 z-20"></i>
                        </a>
                    </h1>
                    <h2 className="text-lg w-48">{props.description}</h2>
                    <Link to={'/Landing-Page/Tag/' + props.tag} className="w-fit">
                        <p
                            className={`mt-2 border-2 w-fit 
                    ${props.tagcolor}
                     hover:bg-opacity-80
                     font-bold text-white rounded-full w-fit px-4 py-0.5 z-10`}>
                            {props.tag}
                        </p>
                    </Link>
                </a>
            </div>
        </FadeInSection>
    )
}