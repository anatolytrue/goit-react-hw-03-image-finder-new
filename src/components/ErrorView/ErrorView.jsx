import { ErrImg, ErrMsg } from "./ErrorView.styled"
import errorImage from "./matthew-henry-2Ts5HnA67k8-unsplash.jpg"


export function ErrorView() {
    return (
        <>
            <ErrImg src={errorImage} alt="sad dog" />
            <ErrMsg>No pics finded..</ErrMsg>
        </>
        
    )
}