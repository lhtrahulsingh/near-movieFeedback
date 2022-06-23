import React , {useState ,useEffect} from "react";
import {Card} from 'react-bootstrap';

export default function AllFeedback(prop) {
    const [feedback, setFeedback] = useState(
        // ['hello rahul .......', 'rahul bhai ko hello.!!!!!!']
        []
        );

    useEffect(() => {
        const getFeedback = async () => {
            let allFeedback = await window.contract.getFeedback({
              user: window.accountId,
            });
            console.log('rahul singh',window.accountId)
            setFeedback(allFeedback);
          };
          getFeedback();
    },[])

    return (
        <div style={{marginTop : '10px'}}>
            <Card>
                <Card.Title>Your All Feedback</Card.Title>
                <Card.Body>

                
            {feedback.map((data , index)=>{
                let item = (data.toString()).split('/*/');
                return (
                    <Card style={{marginTop : '10px', backgroundColor : '#e6e6e6'}}>
                        <Card.Title
                        style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '15px'}}>
                            Feedback #{index+1} on movie {item[2]}
                        </Card.Title>
                        <Card.Body>{item[0]}</Card.Body>
                    </Card>
                )
            })}
            </Card.Body>
            </Card>
        </div>
    )
}