import React , {useRef , useState} from "react";
import {Card , Nav} from 'react-bootstrap';
import data from "../assets/img/data";

export default function Movies(prop) {
    return (
        <div>
            {data.map((item , index) => {
                let url = '/feedback?id=' + item.id.toString() + '&name=' + item.title;
                return (
            <Card style={{marginTop: '10px', backgroundColor : '#e6e6e6'}}>
                <Card.Title 
                style={{marginLeft: 'auto' , marginRight :'auto' , marginTop: '10px'}}
                >
                    <Nav.Link href={url}>{item.title} (#{item.id})</Nav.Link>
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
                )
            })}
        </div>
    )
}