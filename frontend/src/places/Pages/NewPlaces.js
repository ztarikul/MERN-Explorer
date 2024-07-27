import React from "react";
import Input from "../../shared/Components/FormElements/Input";
import './NewPlaces.css';

const NewPlaces = () => {

    return (
        <form className="place-form">
            <Input element="input" type="text" label="Title" validators={[]} errorText="Please enter e valid title." />
        </form>
    )
}

export default NewPlaces;