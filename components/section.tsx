import { SampleModal } from "main";
import * as React from "react";
import { SectionIcon } from "./section-icon";

type SectionProps = {
    title: string,
    secondtitle: string,
    sectiondesc: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[]
}

function hello(title: string, description: string, reference: string, bullets: string[]) {
    new SampleModal(this.app, title, description, reference, bullets).open();
}

export const Section = ({ title, secondtitle, sectiondesc, data }: SectionProps) => {
    return(
        <div className="section-container">
            <h1>{title}</h1>
            {secondtitle !== "" &&
                <h2 className="section-subtitle">{secondtitle}</h2>
            }
            <div className="section-content">
                <div className="section-row section-text text fontsize">{sectiondesc}</div>
                <div className="section-row">
                    {data.map((dataObject) => (
                        <SectionIcon title={dataObject.title} icon={dataObject.icon} description={dataObject.subtitle} clickFunc={()=> hello(dataObject.title, dataObject.description, dataObject.reference, dataObject.bullets)}/>
                    ))}
                </div>
            </div>
        </div>
    )
}