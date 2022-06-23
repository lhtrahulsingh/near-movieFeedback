import React , {useEffect, useState} from "react";
import {Card , Nav} from 'react-bootstrap'
import data from "../assets/img/data";

export default function FeedbackList(prop) {
    const [id , setId] = useState();
    const [name , setName] = useState();
    const [addUrl , setAddUrl] = useState();
    const [viewUrl , setViewUrl] = useState();
    useEffect(() => {
        let url = new URL(window.location.href);
        let searchParams = new URLSearchParams(url.search);
        setId(searchParams.get("id").toString());
        let urlAdd = '/add-feedback?id=' + searchParams.get("id").toString() + '&name=' + searchParams.get("name").toString();
        let urlView = '/view-feedback?id=' + searchParams.get("id").toString() + '&name=' + searchParams.get("name").toString();
        setAddUrl(urlAdd);
        setViewUrl(urlView); 
        console.log("rahul", id)
    },[])

    return(
        <div>
            {data.map((item,index) => {
                return(<>
                {console.log("rahul 2",id)}
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
                        <div
                        style={{ marginTop: '10px'}}
                        >Rating : {item.voteAverage}</div>
                    </Card.Body>
                </Card>
                    :""}
                </>)
            })}
            <Card style={{marginTop : '10px'}}>
                <div style={{display: 'flex', width: '100%'}}>
                <div><Nav.Link href={addUrl}>Add Feedback</Nav.Link></div>
                <div><Nav.Link href={viewUrl}>Show Feedback</Nav.Link></div>
                </div>
            </Card>
        </div>
    )
}