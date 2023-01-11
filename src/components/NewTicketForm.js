import React from "react";
import PropTypes from "prop-types";
import ReusableFrom from "./ReusableForm";
import { v4 } from 'uuid'; 


function NewTicketForm(props){

  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableFrom 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText = "Help!"/>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;