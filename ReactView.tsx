import * as React from "react";
import { Section } from "./components/section";
import { data_movement } from "./data/data_movement";
import { data_action } from "./data/data_action";
import { data_bonusaction } from "./data/data_bonusaction";
import { data_reaction } from "./data/data_reaction";
import { data_condition } from "./data/data_condition"
import * as environment from "./data/data_environment";

export const ReactView = () => {

  return (
    <div className="refpage">
      <Section title={" Movement "} secondtitle={"limited by movement speed"} sectiondesc={"You can move at any time during your turn (before, after, or during actions)."} data={data_movement}/>
      <Section title={" Action "} secondtitle={"1/Turn"} sectiondesc={"You can also interact with one object or feature of the environment for free."} data={data_action}/>
      <Section title={" Bonus Action "} secondtitle={"max. 1/turn"} sectiondesc={"You can take a bonus action only when a special ability, spell, or feature states that you can do something as a bonus action."} data={data_bonusaction}/>
      <Section title={" Reaction "} secondtitle={"max. 1/Round"} sectiondesc={"A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else's."} data={data_reaction}/>
      <Section title={" Condition "} secondtitle={""} sectiondesc={"A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else's."} data={data_condition} />
      <Section title={" Environment: Cover "} secondtitle={""} sectiondesc={"Obstacles can provide cover during combat, making a target more difficult to harm."} data={environment.data_environment_cover}/>
      <Section title={" Environment: Light "} secondtitle={""} sectiondesc={"The presence or absence of light in an environment creates three categories of illumination."} data={environment.data_environment_light}/>
      <Section title={" Environment: Obscurance "} secondtitle={""} sectiondesc={"Effects that obscure vision can prove a significant hindrance to most adventuring tasks."} data={environment.data_environment_obscurance} />
      <Section title={" Environment: Vision"} secondtitle={""} sectiondesc={"Some creatures have extraordinary senses that allow them to perceive their environment."} data={environment.data_environment_vision}/>
      <div className="clear"></div>
    </div>
  );
};