import { Group } from "./group.js";

export class Kingdom {
  constructor(kingdomName, numberOfGroups) {
    this.kingdomName = kingdomName;
    this.numberOfGroups = numberOfGroups;

    this.container = null;
    this.groups = [];
    this.locations = [
      "north-west",
      "north",
      "north-east",
      "west",
      "center",
      "east",
      "south-west",
      "south",
      "south-east",
    ];
  }

  addGroup(group) {
    this.groups.push(group);
  }

  TwoDimensional(arr, size) {
    var res = [];
    for (var i = 0; i < arr.length; i = i + size)
      res.push(arr.slice(i, i + size));
    return res;
  }

  paintKingdom(host) {
    if (!host) throw new Exception("Parent element doesn't exist.");

    this.container = document.createElement("div");
    this.container.classList.add("root");
    host.appendChild(this.container);

    this.paintGroupForm(this.container);
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
    groupNameDiv.className = "groupNameDiv";
    groupFormDiv.appendChild(groupNameDiv);

    let groupNameLabel = document.createElement("label");
    groupNameLabel.innerHTML = "Group name";
    groupNameDiv.appendChild(groupNameLabel);

    let groupNameInput = document.createElement("input");
    groupNameInput.className = "groupName";
    groupNameDiv.appendChild(groupNameInput);

    // GROUP SIZE //
    let groupSizeDiv = document.createElement("div");
    groupSizeDiv.className = "groupSizeDiv";
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
    groupTypeDiv.className = "groupTypeDiv";
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
    locationsDiv.className = "locationsDiv";
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

      if (location > this.locations.length) {
        alert("Please pick a different location for the group.");
      } else {
        this.groups[location].ChangeGroup(groupName, groupSize, groupType);
      }
    };
  }

  paintGroups(host) {
    const groupsDiv = document.createElement("div");
    groupsDiv.className = "groupsDiv";
    host.appendChild(groupsDiv);

    let newGroupDiv;
    let newGroup;
    this.locations.forEach((location) => {
      newGroupDiv = document.createElement("div");
      newGroupDiv.className = "newGroupDiv";
      groupsDiv.appendChild(newGroupDiv);

      newGroup = new Group("", 0, "");
      this.addGroup(newGroup);
      newGroup.paintGroup(newGroupDiv);
    });
  }
}
