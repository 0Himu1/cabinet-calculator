import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResultDisplay = ({ measurements }) => {
  const { height, width, depth, panelThickness } = measurements;

  const navigate = useNavigate();

  useEffect(() => {
    if (!measurements || Object.keys(measurements).length === 0) {
      navigate("/");
    }
  }, [measurements, navigate]);

  // Convert measurements to float and limit to two decimal places
  const h = parseFloat(height).toFixed(2);
  const w = parseFloat(width).toFixed(2);
  const d = parseFloat(depth).toFixed(2);
  const thicknessMM = parseFloat(panelThickness);
  const thicknessInches = (thicknessMM / 25.4).toFixed(2); // Convert mm to inches and limit to two decimal places

  // Calculate the board sizes with correct thickness, rounded to two decimal places
  const calculateBoardSize = (dimension) => parseFloat(dimension).toFixed(2);

  const sideBoards = {
    width: d,
    height: calculateBoardSize(h - 2 * thicknessInches),
  }; // Two sides
  const topBoard = {
    width: calculateBoardSize(w - 2 * thicknessInches),
    height: d,
  }; // Top
  const bottomBoard = {
    width: calculateBoardSize(w - 2 * thicknessInches),
    height: d,
  }; // Bottom
  const backBoard = { width: w, height: h }; // Back
  const doorBoards = { width: calculateBoardSize(w / 2), height: h }; // Two doors
  // Calculate door dimensions
  const maxDoorWidthInches = 16;
  let numDoors = Math.ceil(w / maxDoorWidthInches);
  let doorWidth = (w / numDoors).toFixed(2);

  // Calculate total area in square inches and convert to square feet
  const totalAreaInSqInches =
    2 * (parseFloat(sideBoards.width) * parseFloat(sideBoards.height)) +
    parseFloat(topBoard.width) * parseFloat(topBoard.height) +
    parseFloat(bottomBoard.width) * parseFloat(bottomBoard.height) +
    parseFloat(backBoard.width) * parseFloat(backBoard.height) +
    2 * (parseFloat(doorBoards.width) * parseFloat(doorBoards.height));

  const totalAreaInSqFt = (totalAreaInSqInches / 144).toFixed(2); // 144 square inches in a square foot

  return (
    <div className="p-4 h-full bg-white dark:bg-gray-800  shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-custom-blue dark:text-white">
        Board Dimensions and Total Area
      </h2>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          Side Boards:{" "}
          <span className="font-semibold">
            {sideBoards.width} inch x {sideBoards.height} inch
          </span>{" "}
          (2 pieces)
        </p>
        <p>
          Top Board:{" "}
          <span className="font-semibold">
            {topBoard.width} inch x {topBoard.height} inch
          </span>
        </p>
        <p>
          Bottom Board:{" "}
          <span className="font-semibold">
            {bottomBoard.width} inch x {bottomBoard.height} inch
          </span>
        </p>
        <p>
          Back Board:{" "}
          <span className="font-semibold">
            {backBoard.width} inch x {backBoard.height} inch
          </span>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Number of Doors: <span className="font-semibold">{numDoors}</span>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Each Door:{" "}
          <span className="font-semibold">
            {doorWidth} inch x {h} inch
          </span>
        </p>
        <p className="text-xl">
          Total Area:{" "}
          <span className="font-semibold">{totalAreaInSqFt} square feet</span>
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;
