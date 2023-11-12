import {SearchBar,SearchForm,  SearchFormButton, SearchFormButtonLabel, SearchFormInput} from "./Searchbar.styled"
import { Formik} from "formik"
// import styled from 'styled-components';


export const Searchbar =({onSubmit}) => {
    
        const handleSubmit = (values, {resetForm}) => {
            onSubmit(values)
            resetForm()
            }

        return (
            
            <Formik
                initialValues={{imageName: ''}}
                onSubmit={handleSubmit}
            >
                <SearchBar>
                    <SearchForm>
                    <SearchFormButton type="submit">
                        <SearchFormButtonLabel>
                            Search
                        </SearchFormButtonLabel>
                    </SearchFormButton>
                        <SearchFormInput
                            // as={SearchFormInput}
                            name="imageName"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchBar>
            </Formik>
        )
    }