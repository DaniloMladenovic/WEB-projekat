import { Hero } from "./hero.js";

export class Group {
  constructor(name, size, type, location) {
    this.groupName = name;
    this.groupSize = size;
    this.groupType = type;
    this.location = location;

    this.container = null;
    this.heroes = [];
  }

  ChangeGroup(groupName, groupSize, groupType, location) {
    this.groupName = groupName;
    this.groupSize = groupSize;
    this.groupType = groupType;
    this.location = location;

    this.container.querySelector(
      `.${location}`
    ).innerHTML = `${this.groupName} (${this.groupType})`;

    let heroesDiv = document.createElement("div");
    heroesDiv.className = "heroesDiv";
    this.container.appendChild(heroesDiv);

    let i;
    let newHero;
    for (i = 0; i < groupSize; i++) {
      newHero = new Hero("Name", i, "Class");
      newHero.paintHero(heroesDiv, i);
    }
  }

  paintGroup(host, location) {
    this.container = host;

    let locationLabel = document.createElement("h3");
    locationLabel.innerHTML = location;
    host.appendChild(locationLabel);

    let groupInfo = document.createElement("h3");
    groupInfo.className = `${location}`;
    groupInfo.innerHTML = `${this.groupName} (${this.groupType})`;
    host.appendChild(groupInfo);
  }
}
