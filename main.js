import { Kingdom } from "./kingdom.js";

fetch("https://localhost:5001/Kingdom/GetKingdoms").then((p) => {
  p.json().then((data) => {
    data.forEach((kingdom) => {
      const kingdom1 = new Kingdom(
        kingdom.id,
        kingdom.kingdomName,
        kingdom.kingdomCapitol,
        kingdom.king
      );
      kingdom1.paintKingdom(document.body);

      kingdom.groups.forEach((group) => {
        var location = kingdom1.locations.indexOf(group.location);
        var group1 = kingdom1.groups[location];

        group1.ChangeGroup(
          group.id,
          group.groupName,
          group.groupSize,
          group.groupType,
          group.location
        );

        group.heroes.forEach((hero) => {
          group1.changeHero(
            hero.id,
            hero.heroName,
            hero.heroClass,
            hero.heroOrder
          );
        });
      });
    });
  });
});
