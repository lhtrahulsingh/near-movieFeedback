import React  from "react";
import {Card} from 'react-bootstrap';

export default function Welcome(prop) {
    return(
        <div>
            <Card style={{height : '300px' , marginTop : '10px', backgroundColor : '#e6e6e6'}}>
                <Card.Title
                style={{margin : 'auto'}}
                >Welcome on movie feedback D-App</Card.Title>
            </Card>
        </div>
    )
}
