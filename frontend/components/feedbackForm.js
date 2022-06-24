import React ,{useState , useEffect, useRef} from "react";
import {Card, Button , Form} from 'react-bootstrap';
import { useHistory } from "react-router";

export default function FeedbackForm(prop) {
    const [id , setId] = useState();
    const [name , setName] = useState();
    const feedbackMessage = useRef("");
    const [buttonState, setButtonState] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);
        setId(searchParams.get("id").toString());
        setName(searchParams.get("name").toString())
    },[])

    const submitBtn = async() => {
        setButtonState(true);
        let isFeedbackMessage = feedbackMessage.current.value.match("[A-Za-z0-9]");
        if (isFeedbackMessage === null){
            if (isFeedbackMessage === null){
                alert("Please enter Feedback Message....!!!!")
            }
        }else {
            //Write Code to Save feedback on BlockChain
            await window.contract.addFeedback({
                id: id.toString(),
                message:feedbackMessage.current.value,
                name:name.toString(),
                user: window.accountId.toString(),
              });
              alert("Feedback added successfully")
            history.goBack();
        }
        feedbackMessage.current.value = null;
        setButtonState(false);
    }

    return (        
        <Card style={{marginTop : '10px'}}>
            <Card.Title style={{marginTop : '10px'}}>Add new feedback for {name}</Card.Title>
            <Card.Body>
            <Form style={{marginTop: '20px'}}>
                <Form.Group>
                    <div style={{display:'flex', marginTop:'15px'}}>
                        <Form.Label style={{width:'150px'}}>Feedback</Form.Label>
                        <Form.Control
                            ref={feedbackMessage}
                            placeholder='enter your feedback'
                        ></Form.Control>
                    </div>
                </Form.Group>
            </Form>
            <div style={{display : 'grid'}}>
                <Button 
                disabled={buttonState} 
                style={{marginTop:'20px'}} 
                variant='primary' 
                onClick={submitBtn}
                >Done Feedback</Button>
            </div>
            </Card.Body>
        </Card>
    )
}
