import { AppContext } from "context";
import { ItemView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactView } from "../ReactView"

export const VIEW_TYPE_EXAMPLE = "example-view";

export class CustomView extends ItemView {
    getViewType(): string {
        return VIEW_TYPE_EXAMPLE;
    }
    getDisplayText(): string {
        return "Donjon Reference for 5e";
    }
    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    async onOpen(){
        // const reference_page = this.containerEl.createEl("div", { cls: "refpage" });
        // const movement_section = reference_page.createEl("div", { cls: "refpage_section refpage_movement" });
        // const movement_title = movement_section.createEl("div", {
        //     text: " Movement ",
        //     cls: "section-title"
        // });
        // movement_title.createEl("span", {
        //     text: "limited by movement speed",
        //     cls: "float-right section-subtitle"
        // })

        // const movement_content = movement_section.createEl("div", {
        //     cls: "section-content"
        // });

        // movement_content.createEl("div", {
        //     text: " You can move at any time during your turn (before, after, or during actions) ",
        //     cls: "section-text"
        // });

        ReactDOM.render(
            <AppContext.Provider value={this.app}>
                <ReactView />
            </AppContext.Provider>,
            this.containerEl.children[1]
        );

        //const movement_row = movement_content.createEl("div", { cls: "section-row" });

    }

    async onClose() {
        ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
    }
}