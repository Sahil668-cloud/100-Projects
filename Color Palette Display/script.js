const Hex = [
    "#FF5733", "#33FF57", "#3357FF", "#57FF33", "#5733FF",
    "#FF33A1", "#A133FF", "#33A1FF", "#F3A0FF", "#A0F3FF",
    "#FF5733", "#B833FF", "#33FF8D", "#8D33FF", "#FF8D33",
    "#33FFD1", "#D133FF", "#FF338D", "#8D33FF", "#33A6FF",
    "#FF7F33", "#8DFF33", "#33FF57", "#3357FF", "#FF7F33",
    "#FF33A6", "#A6FF33", "#33A6FF", "#FF8D57", "#57FF8D",
    "#A1FF33", "#33A1FF", "#FF33C2", "#C233FF", "#FF338D",
    "#FFB533", "#33FF97", "#57A6FF", "#7F33FF", "#FF5733",
    "#B833FF", "#FF3D57", "#33FF57", "#57FF33", "#33FF97",
    "#57B0FF", "#3DFF57", "#FF33A6", "#FF8D33", "#A033FF",
    "#33A1FF", "#B0FF33", "#33FF57", "#8D33FF", "#8D57FF",
    "#FF5733", "#A6FF57", "#8D33FF", "#57FF33", "#33FF57",
    "#33B0FF", "#FF7F57", "#8D33FF", "#FF5733", "#57FF33",
    "#A1FF33", "#8D33FF", "#33FF8D", "#FF7F33", "#33A6FF",
    "#FF5733", "#33FF97", "#D1FF33", "#FF8D33", "#33B0FF",
    "#8D33FF", "#FF33A1", "#57FF33", "#A1FF57", "#33A6FF",
    "#A0FF33", "#33FF57", "#57FF8D", "#A1FF33", "#FF5733",
    "#8D33FF", "#33FF57", "#FF5733", "#8D33FF", "#B0FF33",
    "#33A1FF", "#FF3D57", "#8D33FF", "#33FF8D", "#FF57A6",
    "#A1FF33", "#FF33D1", "#8D33FF", "#FF8D33", "#57FF33",
    "#33FF8D", "#FF5733", "#33FF57", "#FF57A1", "#FF5733",
    "#33A6FF", "#A1FF33", "#33FF57", "#57FF33", "#FF7F33",
    "#FF8D57", "#8D33FF", "#33A6FF", "#FF5733", "#33FF57",
    "#D32F2F", "#1976D2", "#388E3C", "#FBC02D", "#8E24AA",
    "#0288D1", "#7B1FA2", "#0288D1", "#C2185B", "#8BC34A",
    "#FFC107", "#9C27B0", "#3F51B5", "#FF5722", "#795548",
    "#607D8B", "#FF9800", "#CDDC39", "#00BCD4", "#8BC34A",
    "#F44336", "#03A9F4", "#9E9E9E", "#E91E63", "#FF9800",
    "#9C27B0", "#2196F3", "#4CAF50", "#FFEB3B", "#673AB7",
    "#FFC107", "#8D6E63", "#D32F2F", "#1976D2", "#0288D1",
    "#388E3C", "#5C6BC0", "#F44336", "#009688", "#9E9E9E",
    "#9C27B0", "#F57C00", "#4CAF50", "#FF5722", "#607D8B",
    "#F44336", "#FFEB3B", "#8BC34A", "#3F51B5", "#9E9E9E",
    "#FF5722", "#4CAF50", "#009688", "#FF9800", "#673AB7",
    "#D32F2F", "#1976D2", "#8BC34A", "#FF9800", "#0288D1",
    "#C2185B", "#F44336", "#607D8B", "#8E24AA", "#2196F3",
    "#FFEB3B", "#4CAF50", "#9C27B0", "#FF5722", "#FF9800",
    "#9E9E9E", "#FFEB3B", "#1976D2", "#2196F3", "#3F51B5",
    "#8BC34A", "#FF9800", "#0288D1", "#FFC107", "#4CAF50",
    "#F44336", "#FF5722", "#9C27B0", "#FFEB3B", "#607D8B",
    "#8D6E63", "#FF9800", "#2196F3", "#9E9E9E", "#FF5733",
    "#8BC34A", "#3F51B5", "#FFEB3B", "#9C27B0", "#4CAF50",
    "#0288D1", "#FF9800", "#9E9E9E", "#FF5722", "#607D8B",
    "#FF5733", "#D32F2F", "#8BC34A", "#FF9800", "#0288D1",
    "#C2185B", "#9C27B0", "#9E9E9E", "#2196F3", "#FFEB3B"
];

for (let i = 0; i < Hex.length; i++) {
    const element = Hex[i];
    let container = document.getElementById("colorContainer");
    container.innerHTML += `
        <div class="colBox">
            <div class="colorBox" style="background-color: ${element};"></div>
            <p class="colorCode">${element}</p>
        </div>
    `;
}