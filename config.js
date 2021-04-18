const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoicmVsaWVmdHJhY2tlciIsImEiOiJja25sd200MjYwbGxqMm5wYjJ0eW51Z3Y1In0.tISb-YxTPkEmpUCjddpafQ",
  CSV: "https://docs.google.com/spreadsheets/d/1l7lrzXd1T4ro7f1B8dynEqvJtSwTgYVhc3RlHaxC_a4/gviz/tq?tqx=out:csv&sheet=SVGShelters",
  center: [-61.197096, 13.252818],
  zoom: 10,
  title: "La Soufriere Emergency Shelters",
  description:
    "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
  sideBarInfo: ["Name"],
  popupInfor: ["Name", "Address", "Phone", "Occupancy"],
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
