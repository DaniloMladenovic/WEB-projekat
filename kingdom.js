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

    let buttonsDiv = document.createElement("div");
    buttonsDiv.className = "someDiv";
    groupFormDiv.appendChild(buttonsDiv);

    // DODAJ GRUPU DUGME
    let addGroupButton = document.createElement("button");
    addGroupButton.innerHTML = "Add";
    buttonsDiv.appendChild(addGroupButton);
    addGroupButton.onclick = () => {
      let groupName = this.container.querySelector(".groupName").value;
      let groupSize = parseInt(
        this.container.querySelector(".groupSize").value
      );
      let groupType = groupTypeSelect.value;
      let location = parseInt(locationsSelect.value);

      if (groupName === "") {
        alert("Please insert group name.");
      } else if (Number.isNaN(groupSize)) {
        alert("Please insert group size.");
      } else if (groupSize > 9) {
        alert("Maximum group size is 9.");
      } else if (groupType === "") {
        alert("Please pick group type.");
      } else if (locationsSelect.value === "") {
        alert("Please pick a location.");
      } else {
        this.groups[location].ChangeGroup(
          groupName,
          groupSize,
          groupType,
          this.locations[location]
        );
      }
    };

    // IZMENI GRUPU DUGME
    let updateGroupButton = document.createElement("button");
    updateGroupButton.innerHTML = "Update";
    buttonsDiv.appendChild(updateGroupButton);
    updateGroupButton.onclick = () => {
      let groupName = this.container.querySelector(".groupName").value;
      let groupSize = parseInt(
        this.container.querySelector(".groupSize").value
      );
      let groupType = groupTypeSelect.value;
      let location = parseInt(locationsSelect.value);

      if (groupName === "") {
        alert("Please insert group name.");
      } else if (Number.isNaN(groupSize)) {
        alert("Please insert group size.");
      } else if (groupSize > 9) {
        alert("Maximum group size is 9.");
      } else if (groupType === "") {
        alert("Please pick group type.");
      } else if (locationsSelect.value === "") {
        alert("Please pick a location.");
      } else {
        let locationElement = this.container.querySelector(
          `.${this.locations[location]}`
        );

        let removeElement =
          locationElement.parentElement.querySelector(".heroesDiv");

        if (removeElement != null) {
          locationElement.parentElement.removeChild(
            locationElement.parentElement.querySelector(".heroesDiv")
          );

          this.groups[location].ChangeGroup(
            groupName,
            groupSize,
            groupType,
            this.locations[location]
          );
        }
      }
    };

    // IZBRISI GRUPU DUGME
    let deleteGroupButton = document.createElement("button");
    deleteGroupButton.innerHTML = "Delete";
    buttonsDiv.appendChild(deleteGroupButton);
    deleteGroupButton.onclick = () => {
      let location = parseInt(locationsSelect.value);

      if (locationsSelect.value === "") {
        alert("dude pls be normal");
      } else {
        let locationElement = this.container.querySelector(
          `.${this.locations[location]}`
        );

        let removeElement =
          locationElement.parentElement.querySelector(".heroesDiv");

        if (removeElement != null) {
          this.container.querySelector(
            `.${this.locations[location]}`
          ).innerHTML = "Group name (Type)";

          locationElement.parentElement.removeChild(
            locationElement.parentElement.querySelector(".heroesDiv")
          );
        }
      }
    };
  }

  paintHeroForm(host) {
    const heroFormDiv = document.createElement("div");
    heroFormDiv.className = "heroFormDiv";
    host.appendChild(heroFormDiv);

    let HeroLabel = document.createElement("h3");
    HeroLabel.innerHTML = "Hero creation";
    heroFormDiv.appendChild(HeroLabel);

    // HERO NAME //
    let heroNameDiv = document.createElement("div");
    heroNameDiv.className = "someDiv";
    heroFormDiv.appendChild(heroNameDiv);

    let heroNameLabel = document.createElement("label");
    heroNameLabel.innerHTML = "Hero name";
    heroNameDiv.appendChild(heroNameLabel);

    let heroNameInput = document.createElement("input");
    heroNameInput.className = "heroName";
    heroNameDiv.appendChild(heroNameInput);

    // CLASS SELECT
    let heroClasses = ["Warrior", "Paladin", "Priest", "Ranger", "Mage"];

    let heroClassDiv = document.createElement("div");
    heroClassDiv.className = "someDiv";
    heroFormDiv.appendChild(heroClassDiv);

    let heroClassLabel = document.createElement("label");
    heroClassLabel.innerHTML = "Class";
    heroClassDiv.appendChild(heroClassLabel);

    let classSelect = document.createElement("select");
    heroClassDiv.appendChild(classSelect);

    let opt0 = document.createElement("option");
    opt0.value = "";
    opt0.disabled = true;
    opt0.selected = true;
    opt0.text = "select";
    classSelect.appendChild(opt0);

    heroClasses.forEach((type) => {
      let opt = document.createElement("option");
      opt.value = type;
      opt.text = type;
      classSelect.appendChild(opt);
    });

    // LOCATION SELECT

    let heroLocationsDiv = document.createElement("div");
    heroLocationsDiv.className = "someDiv";
    heroFormDiv.appendChild(heroLocationsDiv);

    let heroLocationsLabel = document.createElement("label");
    heroLocationsLabel.innerHTML = "Location";
    heroLocationsDiv.appendChild(heroLocationsLabel);

    let heroLocationsSelect = document.createElement("select");
    heroLocationsDiv.appendChild(heroLocationsSelect);

    opt0 = document.createElement("option");
    opt0.value = "";
    opt0.disabled = true;
    opt0.selected = true;
    opt0.text = "select";
    heroLocationsSelect.appendChild(opt0);

    this.locations.forEach((location, index) => {
      let opt = document.createElement("option");
      opt.value = index;
      opt.text = location;
      heroLocationsSelect.appendChild(opt);
    });

    // ORDER SELECT

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

    let i;
    for (i = 1; i <= 9; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.text = i;
      heroOrderSelect.appendChild(opt);
    }

    let buttonsDiv = document.createElement("div");
    buttonsDiv.className = "someDiv";
    heroFormDiv.appendChild(buttonsDiv);

    // DODAJ HEROJA DUGME
    let addGroupButton = document.createElement("button");
    addGroupButton.innerHTML = "Add";
    buttonsDiv.appendChild(addGroupButton);
    addGroupButton.onclick = () => {
      let heroName = this.container.querySelector(".heroName").value;
      let heroClass = classSelect.value;
      let location = parseInt(heroLocationsSelect.value);
      let heroOrder = heroOrderSelect.value;

      if (heroName === "") {
        alert("Please insert hero name.");
      } else if (heroClass === "") {
        alert("Please select a class.");
      } else if (heroLocationsSelect.value === "") {
        alert("Please pick a location.");
      } else if (Number.isNaN(heroOrder)) {
        alert("Please pick hero order.");
      } else if (heroOrder > this.groups[location].groupSize) {
        alert("Selected group isn't that big.");
      } else {
        this.groups[location].changeHero(heroName, heroClass, heroOrder);
      }
    };

    // IZMENI HEROJA DUGME
    let updateGroupButton = document.createElement("button");
    updateGroupButton.innerHTML = "Update";
    buttonsDiv.appendChild(updateGroupButton);
    updateGroupButton.onclick = () => {
      let heroName = this.container.querySelector(".heroName").value;
      let heroClass = classSelect.value;
      let location = parseInt(heroLocationsSelect.value);
      let heroOrder = heroOrderSelect.value;

      if (heroName === "") {
        alert("Please insert hero name.");
      } else if (heroClass === "") {
        alert("Please select a class.");
      } else if (heroLocationsSelect.value === "") {
        alert("Please pick a location.");
      } else if (Number.isNaN(heroOrder)) {
        alert("Please pick hero order.");
      } else if (heroOrder > this.groups[location].groupSize) {
        alert("Selected group isn't that big.");
      } else {
        this.groups[location].changeHero(heroName, heroClass, heroOrder);
      }
    };

    // OBRISI HEROJA DUGME
    let deleteGroupButton = document.createElement("button");
    deleteGroupButton.innerHTML = "Delete";
    buttonsDiv.appendChild(deleteGroupButton);
    deleteGroupButton.onclick = () => {
      let location = parseInt(heroLocationsSelect.value);
      let heroOrder = heroOrderSelect.value;

      if (heroLocationsSelect.value === "") {
        alert("You need to select a location");
      } else if (Number.isNaN(heroOrder)) {
        alert("Please pick hero order.");
      } else if (heroOrder > this.groups[location].groupSize) {
        alert("Selected group isn't that big.");
      } else {
        this.groups[location].deleteHero(heroOrder);
      }
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
