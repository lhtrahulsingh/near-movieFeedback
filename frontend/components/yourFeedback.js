import React , {useState ,useEffect} from "react";
import {Card, Button} from 'react-bootstrap';
import { useHistory } from "react-router";

export default function YourFeedback(prop) {
    const [feedback, setFeedback] = useState([]);
    const [buttonState, setButtonState] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const getFeedback = async () => {
            let allFeedback = await window.contract.getUserFeedback({
              user: window.accountId.toString(),
            });
            setFeedback(allFeedback);
          };
          getFeedback();
    },[])

    const clearAllBtn = async() =>{
        setButtonState(true);
        await window.contract.clearAllFeedback();
        alert("successfully clear all feedback");
        setButtonState(false);
        history.push('/movies');
    }

    return (
        <div style={{marginTop : '10px'}}>
            <Card>
                <Card.Title style={{marginTop : '5px' , marginLeft : '5px'}}>Your All Feedback</Card.Title>
                <Card.Body>
            {feedback.map((data , index)=>{
                let item = (data.toString()).split('/*/');
                return (
                    <Card style={{marginTop : '10px', backgroundColor : '#e6e6e6'}}>
                        <Card.Title
                        style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '15px'}}>
                            {item[2]}
                        </Card.Title>
                        <Card.Body>
                            <div style={{fontSize: '15px'}}>{item[3]} feedback is : </div>
                            <div style={{fontSize: '25px'}}>{item[0]}</div>
                            </Card.Body>
                    </Card>
                )
            })}
            </Card.Body>
            {feedback.length > 0 ? 
            <div style={{display:'grid' , marginTop :' 20px', marginBottom:'20px'}}>
                <Button
                disabled={buttonState} 
                style={{marginTop:'20px'}} 
                variant='primary' 
                onClick={clearAllBtn}
                >Clear Your all Feedback</Button>
            </div>
            :''}
            </Card>
        </div>
    )
}
