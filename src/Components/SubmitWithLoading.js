import React from "react"
//import Button from 'react-bootstrap/Button'
import {Button,Spinner} from 'react-bootstrap'

function SubmitWithLoading(props){
    const {variant,loading, block} = props    
    return(
        /* */
        <Button 
            className={block ? "btn-block mb-4": ""}
            type="submit"
            variant={variant || "primary"} 
            disabled={loading} 
        >
            {
                loading &&
                <Spinner animation="border" size="sm" />
            }
            {props.children}
        </Button>
    )
    
}
export default SubmitWithLoading;
