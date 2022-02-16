import * as React from "react";

type SectionIconProps = {
    title: string,
    icon: string,
    description: string,
    clickFunc: (param:any) => void

}

export const SectionIcon = ({ title, icon, description, clickFunc }: SectionIconProps) => {
    return(
        <div onClick={clickFunc} className="item itemsize">
            <div className={"item-icon iconsize icon-" + icon} />
            <div className="item-text-container text">
                <div className="item-title">{title}</div>
                <div className="item-desc">{description}</div>
            </div>
        </div>
    )
}