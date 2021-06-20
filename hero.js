export class Hero {
  constructor(heroName, order, heroClass, groupName, location) {
    this.id = null;
    this.heroName = heroName;
    this.order = order;
    this.heroClass = heroClass;
    this.groupName = groupName;
    this.location = location;

    this.container = null;
  }

  paintHero(host, order) {
    let heroDiv = document.createElement("div");
    heroDiv.className = `heroDiv${order}`;
    host.appendChild(heroDiv);
    this.container = heroDiv;

    let heroNameLabel = document.createElement("p");
    heroNameLabel.innerHTML = `${this.heroName}`;
    heroNameLabel.className = `heroNameLabel${order}`;
    heroDiv.appendChild(heroNameLabel);

    let heroClassLabel = document.createElement("p");
    heroClassLabel.innerHTML = `${this.heroClass}`;
    heroClassLabel.className = `heroClassLabel${order}`;
    heroDiv.appendChild(heroClassLabel);
  }
}
