import { ProductScreen } from "../components/ProductScreen"
import { WelcomeScreen } from "../components/WelcomeScreen"

export const FullPage = () => {
    return (
        <div className="fullpage h-screen">
            <WelcomeScreen />
            <ProductScreen />
        </div>
    )
}