import { Group } from "./group.js";

export class Kingdom {
  constructor(kingdomName, numberOfGroups) {
    this.kingdomName = kingdomName;
    this.numberOfGroups = numberOfGroups;
    this.cities = numberOfGroups * 2;

    this.container = null;
    this.groups = [];
  }

  addGroup(group) {
    this.groups.push(group);
  }

  paintKingdom(host) {
    if (!host) throw new Exception("Parent element doesn't exist.");

    this.container = document.createElement("div");
    this.container.classList.add("root");
    host.appendChild(this.container);

    // this.paintGroupForm(this.container);
    // this.paintGroups(this.container);
  }
}
