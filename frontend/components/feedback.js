import React , {useState ,useEffect} from "react";
import {Card} from 'react-bootstrap';
import user from "../assets/img/user";

export default function FeedbackShow(prop) {
    const [feedback, setFeedback] = useState([]);
    const [id , setId] = useState();
    const [name , setName] = useState();

    useEffect(() => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);
        setId(searchParams.get("id").toString());
        setName(searchParams.get("name").toString())

        const getFeedback = async () => {
            let allFeedback = await window.contract.getFeedback({
              users: user,
            });
            setFeedback(allFeedback);
          };
          getFeedback();
    },[])

    return (
        <div style={{marginTop : '10px'}}>
            <Card>
                <Card.Title style={{marginTop: '5px',marginLeft: '5px'}}>Feedback on {name}</Card.Title>
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
                        <Card.Body>
                            <div style={{fontSize: '15px'}}>{item[3]} feedback is : </div>
                            <div style={{fontSize: '25px'}}>{item[0]}</div>
                        </Card.Body>
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
