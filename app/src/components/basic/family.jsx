import React from "react";
import MemberFamily from "./memberFamily";

export default props =>{

    return(
        <div>
            <MemberFamily name="Pedro" surname={props.surname}/>
            <MemberFamily name="Edk" {...props} />
            <MemberFamily name="Pifio" surname="Family"/>
        </div>
    )


}