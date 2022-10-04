import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const ResultsList = ({open}) => {
   /*  const [open, setOpen] = useState(false); */
    
    return (
        <>
            {/* <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
            </Button> */}
            <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
        </>
    )
}

export default ResultsList