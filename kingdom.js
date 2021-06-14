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

    this.paintGroupForm(this.container);
    this.paintGroups(this.container);
  }

  paintGroupForm(host) {
    const groupFormdiv = document.createElement("div");
    groupFormdiv.className = "groupFormDiv";
    host.appendChild(groupFormdiv);

    let groupFormLabel = document.createElement("h3");
    groupFormLabel.innerHTML = "Group creation";
    groupFormdiv.appendChild(groupFormLabel);

    // GROUP NAME //
    let groupNameDiv = document.createElement("div");
    groupNameDiv.className = "groupNameDiv";
    groupFormdiv.appendChild(groupNameDiv);

    let groupNameLabel = document.createElement("label");
    groupNameLabel.innerHTML = "Group name";
    groupNameDiv.appendChild(groupNameLabel);

    let groupNameInput = document.createElement("input");
    groupNameInput.className = "groupName";
    groupNameDiv.appendChild(groupNameInput);

    // GROUP SIZE //
    let groupSizeDiv = document.createElement("div");
    groupSizeDiv.className = "groupSizeDiv";
    groupFormdiv.appendChild(groupSizeDiv);

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
    groupFormdiv.appendChild(groupTypeDiv);

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
  }

  paintGroups(host) {
    const groupsDiv = document.createElement("div");
    groupsDiv.className = "groupsDiv";
    host.appendChild(groupsDiv);
  }
}
