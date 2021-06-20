import { Hero } from "./hero.js";

export class Group {
  constructor(name, size, type, location, kingdomName) {
    this.groupName = name;
    this.groupSize = size;
    this.groupType = type;
    this.location = location;
    this.kingdomName = kingdomName;
    this.id;

    this.container = null;
    this.heroes = [];
  }

  ChangeGroup(id, groupName, groupSize, groupType, location) {
    this.id = id;
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
      newHero = new Hero(
        "Name",
        i,
        "Class",
        `${this.groupName}`,
        `${location}`
      );
      this.heroes.push(newHero);
      newHero.paintHero(heroesDiv, i);
    }
  }

  changeHero(id, heroName, heroClass, heroOrder) {
    this.heroes[heroOrder].id = id;
    this.container.querySelector(
      `.heroNameLabel${heroOrder - 1}`
    ).innerHTML = `${heroName}`;

    this.container.querySelector(
      `.heroClassLabel${heroOrder - 1}`
    ).innerHTML = `${heroClass}`;
  }

  deleteHero(heroOrder) {
    let locationElement = this.container.querySelector(
      `.heroDiv${heroOrder - 1}`
    );

    locationElement.parentElement.removeChild(locationElement);
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
