import React from "react";
import Input from "../../shared/Components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import './NewPlaces.css';

const NewPlaces = () => {

    return <form className="place-form">
        <Input element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title"/>
        <Input element="" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter description"/>
    </form>
}

export default NewPlaces;