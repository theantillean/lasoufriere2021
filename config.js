const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoicmVsaWVmdHJhY2tlciIsImEiOiJja25sd200MjYwbGxqMm5wYjJ0eW51Z3Y1In0.tISb-YxTPkEmpUCjddpafQ",
  CSV: "https://docs.google.com/spreadsheets/d/1l7lrzXd1T4ro7f1B8dynEqvJtSwTgYVhc3RlHaxC_a4/gviz/tq?tqx=out:csv&sheet=SVGShelters",
  center: [-61.197096, 13.252818],
  zoom: 10,
  title: "La Soufriere Emergency Shelters",
  description:
    "This map provides information about the emergency shelters being used following the 2021 eruption of the La Soufriere volcano in St. Vincent and the Grenadines. You can filter the list by district, and type of shelter.",
  sideBarInfo: ["Name"],
  popupInfo: ["Name", "Address"],
  filters: [
    {
      type: "checkbox",
      title: "Type: ",
      columnHeader: "Type", // Case sensitive - must match spreadsheet entry
      listItems: ["Public", "Private"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "District: ",
      columnHeader: "District",
      listItems: [
        "South Central Windward",
        "South Windward",
        "East St. George",
        "West St. George",
        "Marriaqua",
        "Kingstown",
        "South Leeward",
        "Central Leeward",
      ],
    },
  ],
};
