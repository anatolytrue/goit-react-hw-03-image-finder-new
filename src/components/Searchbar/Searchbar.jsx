import {SearchBar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} from "./Searchbar.styled"


export const Searchbar =({onSubmit}) => {
            <SearchBar>
                <SearchForm>
                    <SearchFormButton type="submit">
                        <SearchFormButtonLabel>
                            Search
                        </SearchFormButtonLabel>
                    </SearchFormButton>
                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchBar>
}