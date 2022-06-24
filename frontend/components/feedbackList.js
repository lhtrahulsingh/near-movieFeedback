import React , {useEffect, useState} from "react";
import {Card , Nav} from 'react-bootstrap'
import data from "../assets/img/data";

export default function FeedbackList(prop) {
    const [id , setId] = useState();
    const [name , setName] = useState();
    const [addUrl , setAddUrl] = useState();
    const [viewUrl , setViewUrl] = useState();
    const [show , setShow] = useState(true);
    useEffect(() => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);
        setId(searchParams.get("id").toString());
        let urlAdd = '/add-feedback?id=' + searchParams.get("id").toString() + '&name=' + searchParams.get("name").toString();
        let urlView = '/view-feedback?id=' + searchParams.get("id").toString() + '&name=' + searchParams.get("name").toString();
        setAddUrl(urlAdd);
        setViewUrl(urlView); 

        const getFeedback = async () => {
            let allFeedback = await window.contract.getUserFeedback({
              user: window.accountId.toString(),
            });
            allFeedback.map((data) => {
                let item = (data.toString()).split('/*/')
                if(item[1] === searchParams.get("id").toString()){   
                    setShow(false);
                }
            })
        }
        getFeedback();
    },[])

    return(
        <div>
            {data.map((item,index) => {
                return(<>
                {item.id.toString() === id ?
                    <Card style={{marginTop: '10px', backgroundColor : '#e6e6e6'}}>
                    <Card.Title 
                    style={{marginLeft: 'auto' , marginRight :'auto' , marginTop: '10px'}}
                    >
                        {item.title} (#{item.id})
                    </Card.Title>
                    <Card.Body
                    style={{marginLeft: 'auto' , marginRight :'auto' , marginTop: '10px'}}
                    >
                        <img 
                        style={{ marginTop: '10px' , width: '200px' , height: '100px'}}
                        src={item.backdropPath} />
                        <div
                        style={{ marginTop: '10px'}}
                        >Release Date : {item.releaseDate}</div>
                    </Card.Body>
                </Card>
                    :""}
                </>)
            })}
            <Card style={{marginTop : '10px'}}>
                <div style={{display: 'flex', width: '100%'}}>
                <div>
                {show ?<Nav.Link href={addUrl}>Add Feedback</Nav.Link> : <p style={{marginTop: '10px', marginLeft: '5px'}}>You give your Feedback</p> }    
                </div>
                <div><Nav.Link href={viewUrl}>Show Feedback</Nav.Link></div>
                </div>
            </Card>
        </div>
    )
}
