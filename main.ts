import { App, Modal, Plugin} from 'obsidian';
import { CustomView, VIEW_TYPE_EXAMPLE } from 'views/customView';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		//register custom view example
		this.registerView(
			VIEW_TYPE_EXAMPLE,
			(leaf) => new CustomView(leaf)
		);

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('dice', 'Donjon reference for 5e', (evt: MouseEvent) => {
			//Activate View
			this.activateView();
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('my-plugin-ribbon-class');
		
		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		//Removes and cleans up the view after disabled.
		this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
	}

	async activateView() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);

		await this.app.workspace.getRightLeaf(false).setViewState({
		type: VIEW_TYPE_EXAMPLE,
		active: true,
		});

		this.app.workspace.revealLeaf(
		this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
		);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

export class SampleModal extends Modal {

	title: string
	description: string
	reference: string
	bullets: string[]

	constructor(app: App, title: string, description: string, reference: string, bullets: string[]) {
		super(app);
		this.title = title;
		this.description = description;
		this.reference = reference;
		this.bullets = bullets;
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h1", { text: this.title });
		contentEl.createEl("i", { text: this.description });
		contentEl.createEl("br");
		contentEl.createEl('hr');
		this.bullets.map((point) => {
			contentEl.createEl('p', { text: point })
			contentEl.createEl('hr');
		});
		contentEl.createEl('br');
		contentEl.createEl('i', { text: this.reference });
		contentEl.createEl('br');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

