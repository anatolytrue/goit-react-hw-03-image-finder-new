import { Spinner, LoaderContainer } from "./Loader.styled"
import { ImSpinner } from 'react-icons/im';


export function Loader() {
        return (<LoaderContainer >
            <Spinner>
            <ImSpinner size="32"/>
            </Spinner>
            Loading...
        </LoaderContainer>)
}