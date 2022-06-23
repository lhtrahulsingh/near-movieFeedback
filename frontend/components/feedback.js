import React , {useState ,useEffect} from "react";
import {Card} from 'react-bootstrap';

export default function FeedbackShow(prop) {
    const [feedback, setFeedback] = useState(
        ['hello rahul .......', 'rahul bhai ko hello.!!!!!!']
        // []
        );
    const [id , setId] = useState();
    const [name , setName] = useState();

    useEffect(() => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);
        setId(searchParams.get("id").toString());
        setName(searchParams.get("name").toString())

        const getFeedback = async () => {
            let allFeedback = await window.contract.getFeedback({
              user: window.accountId,
            });
            setFeedback(allFeedback);
          };
          getFeedback();
    },[])

    return (
        <div style={{marginTop : '10px'}}>
            <Card>
                <Card.Title>Your Feedback on {name}</Card.Title>
                <Card.Body>

                
            {feedback.map((data , index)=>{
                let item = (data.toString()).split('/*/');
                let itemId = item[1]
                if(itemId === id){
                return (
                    <Card style={{marginTop : '10px', backgroundColor : '#e6e6e6'}}>
                        <Card.Title
                        style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '15px'}}>
                            Feedback
                        </Card.Title>
                        <Card.Body>{item[0]}</Card.Body>
                    </Card>
                )}
                else{
                    return (<></>)
                }
            })}
            </Card.Body>
            </Card>
        </div>
    )
}