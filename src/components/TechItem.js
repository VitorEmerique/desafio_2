import React from "react";
import PropTypes from 'prop-types'; 


function TechItem({tech,onDelete}){

    return(
    <li>
            {tech}
            <button onclick={onDelete} type="button">Remover</button>
              </li>

    );
}

TechItem.default.Props ={
    tech: 'Oculto',
    };

    TechItem.propTypes ={
        tech: PropTypes.string,
        onDelete: PropTypes.func.isRequired,
        };

export default TechItem;