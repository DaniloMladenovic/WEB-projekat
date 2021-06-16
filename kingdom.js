import { Group } from "./group.js";

export class Kingdom {
  constructor(kingdomName, numberOfGroups) {
    this.kingdomName = kingdomName;
    this.numberOfGroups = numberOfGroups;

    this.container = null;
    this.formContainer = null;
    this.groups = [];
    this.locations = [
      "North-West",
      "North",
      "North-East",
      "West",
      "Center",
      "East",
      "South-West",
      "South",
      "South-East",
    ];
  }

  addGroup(group) {
    this.groups.push(group);
  }

  paintKingdom(host) {
    if (!host) throw new Exception("Parent element doesn't exist.");

    this.container = document.createElement("div");
    this.container.classList.add("root");
    host.appendChild(this.container);

    this.formContainer = document.createElement("div");
    this.formContainer.classList.add("formContainer");
    this.container.appendChild(this.formContainer);

    this.paintGroupForm(this.formContainer);
    this.paintHeroForm(this.formContainer);
    this.paintGroups(this.container);
  }

  paintGroupForm(host) {
    const groupFormDiv = document.createElement("div");
    groupFormDiv.className = "groupFormDiv";
    host.appendChild(groupFormDiv);

    let groupFormLabel = document.createElement("h3");
    groupFormLabel.innerHTML = "Group creation";
    groupFormDiv.appendChild(groupFormLabel);

    // GROUP NAME //
    let groupNameDiv = document.createElement("div");
    groupNameDiv.className = "someDiv";
    groupFormDiv.appendChild(groupNameDiv);

    let groupNameLabel = document.createElement("label");
    groupNameLabel.innerHTML = "Group name";
    groupNameDiv.appendChild(groupNameLabel);

    let groupNameInput = document.createElement("input");
    groupNameInput.className = "groupName";
    groupNameDiv.appendChild(groupNameInput);

    // GROUP SIZE //
    let groupSizeDiv = document.createElement("div");
    groupSizeDiv.className = "someDiv";
    groupFormDiv.appendChild(groupSizeDiv);

    let groupSizeLabel = document.createElement("label");
    groupSizeLabel.innerHTML = "Group size";
    groupSizeDiv.appendChild(groupSizeLabel);

    let groupSizeInput = document.createElement("input");
    groupSizeInput.className = "groupSize";
    groupSizeInput.type = "number";
    groupSizeDiv.appendChild(groupSizeInput);

    // GROUP TYPE SELECT
    let groupTypes = ["warband", "city guards", "explorers", "merchants"];

    let groupTypeDiv = document.createElement("div");
    groupTypeDiv.className = "someDiv";
    groupFormDiv.appendChild(groupTypeDiv);

    let groupTypeLabel = document.createElement("label");
    groupTypeLabel.innerHTML = "Group type";
    groupTypeDiv.appendChild(groupTypeLabel);

    let groupTypeSelect = document.createElement("select");
    groupTypeDiv.appendChild(groupTypeSelect);

    let opt0 = document.createElement("option");
    opt0.value = "";
    opt0.disabled = true;
    opt0.selected = true;
    opt0.text = "select";
    groupTypeSelect.appendChild(opt0);

    groupTypes.forEach((type) => {
      let opt = document.createElement("option");
      opt.value = type;
      opt.text = type;
      groupTypeSelect.appendChild(opt);
    });

    // LOCATION SELECT

    let locationsDiv = document.createElement("div");
    locationsDiv.className = "someDiv";
    groupFormDiv.appendChild(locationsDiv);

    let locationsLabel = document.createElement("label");
    locationsLabel.innerHTML = "Location";
    locationsDiv.appendChild(locationsLabel);

    let locationsSelect = document.createElement("select");
    locationsDiv.appendChild(locationsSelect);

    opt0 = document.createElement("option");
    opt0.value = "";
    opt0.disabled = true;
    opt0.selected = true;
    opt0.text = "select";
    locationsSelect.appendChild(opt0);

    this.locations.forEach((location, index) => {
      let opt = document.createElement("option");
      opt.value = index;
      opt.text = location;
      locationsSelect.appendChild(opt);
    });

    // DODAJ GRUPU DUGME
    let addGroupButton = document.createElement("button");
    addGroupButton.innerHTML = "Add group";
    groupFormDiv.appendChild(addGroupButton);
    addGroupButton.onclick = () => {
      let groupName = this.container.querySelector(".groupName").value;
      let groupSize = parseInt(
        this.container.querySelector(".groupSize").value
      );

      let groupType = groupTypeSelect.value;
      let location = parseInt(locationsSelect.value);

      this.groups[location].ChangeGroup(
        groupName,
        groupSize,
        groupType,
        this.locations[location]
      );
    };
  }

  paintHeroForm(host) {
    const heroFormDiv = document.createElement("div");
    heroFormDiv.className = "heroFormDiv";
    host.appendChild(heroFormDiv);

    let HeroLabel = document.createElement("h3");
    HeroLabel.innerHTML = "Hero creation";
    heroFormDiv.appendChild(HeroLabel);

    // GROUP NAME //
    let heroNameDiv = document.createElement("div");
    heroNameDiv.className = "someDiv";
    heroFormDiv.appendChild(heroNameDiv);

    let heroNameLabel = document.createElement("label");
    heroNameLabel.innerHTML = "Hero name";
    heroNameDiv.appendChild(heroNameLabel);

    let heroNameInput = document.createElement("input");
    heroNameInput.className = "heroName";
    heroNameDiv.appendChild(heroNameInput);

    // GROUP TYPE SELECT
    let heroClasses = ["Warrior", "Paladin", "Priest", "Ranger", "Mage"];

    let heroClassDiv = document.createElement("div");
    heroClassDiv.className = "someDiv";
    heroFormDiv.appendChild(heroClassDiv);

    let heroClassLabel = document.createElement("label");
    heroClassLabel.innerHTML = "Class";
    heroClassDiv.appendChild(heroClassLabel);

    let groupTypeSelect = document.createElement("select");
    heroClassDiv.appendChild(groupTypeSelect);

    let opt0 = document.createElement("option");
    opt0.value = "";
    opt0.disabled = true;
    opt0.selected = true;
    opt0.text = "select";
    groupTypeSelect.appendChild(opt0);

    heroClasses.forEach((type) => {
      let opt = document.createElement("option");
      opt.value = type;
      opt.text = type;
      groupTypeSelect.appendChild(opt);
    });

    // LOCATION SELECT

    let heroOrderDiv = document.createElement("div");
    heroOrderDiv.className = "someDiv";
    heroFormDiv.appendChild(heroOrderDiv);

    let heroOrderLabel = document.createElement("label");
    heroOrderLabel.innerHTML = "Order";
    heroOrderDiv.appendChild(heroOrderLabel);

    let heroOrderSelect = document.createElement("select");
    heroOrderDiv.appendChild(heroOrderSelect);

    opt0 = document.createElement("option");
    opt0.value = "";
    opt0.disabled = true;
    opt0.selected = true;
    opt0.text = "select";
    heroOrderSelect.appendChild(opt0);

    /* 
      pored lokacije dodati dugme paintHero(locationDiv, location, groupSize)


    */

    this.locations.forEach((location, index) => {
      let opt = document.createElement("option");
      opt.value = index;
      opt.text = location;
      heroOrderSelect.appendChild(opt);
    });

    // DODAJ GRUPU DUGME
    let addGroupButton = document.createElement("button");
    addGroupButton.innerHTML = "Add group";
    heroFormDiv.appendChild(addGroupButton);
    addGroupButton.onclick = () => {
      let groupName = this.container.querySelector(".groupName").value;
      let groupSize = parseInt(
        this.container.querySelector(".groupSize").value
      );

      let groupType = groupTypeSelect.value;
      let location = parseInt(locationsSelect.value);

      this.groups[location].ChangeGroup(
        groupName,
        groupSize,
        groupType,
        this.locations[location]
      );
    };
  }

  paintGroups(host) {
    let groupsDiv = document.createElement("div");
    groupsDiv.className = "groupsDiv";
    host.appendChild(groupsDiv);

    let newGroupDiv;
    let newGroup;
    this.locations.forEach((location) => {
      newGroupDiv = document.createElement("div");
      newGroupDiv.className = "newGroupDiv";
      groupsDiv.appendChild(newGroupDiv);

      newGroup = new Group("Group name", 0, "Type", location);
      this.addGroup(newGroup);
      newGroup.paintGroup(newGroupDiv, location);
    });
  }
}
