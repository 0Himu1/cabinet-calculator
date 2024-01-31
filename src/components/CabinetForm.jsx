import React from "react";
import { useForm } from "react-hook-form";

function CabinetForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const addShelf = watch("addShelf"); // Watch for changes in addShelf checkbox

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full  m-auto space-y-6 bg-white dark:bg-gray-800 p-5 shadow-lg"
    >
      <div>
        <label
          htmlFor="height"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Height (inch)
        </label>
        <input
          id="height"
          {...register("height", { required: "Height is required" })}
          type="number"
          className="mt-1 block w-full dark:text-white rounded-sm outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.height && (
          <span className="text-red-500">{errors.height.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="width"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Width (inch)
        </label>
        <input
          id="width"
          {...register("width", { required: "Width is required" })}
          type="number"
          className="mt-1 block w-full dark:text-white rounded-sm outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.width && (
          <span className="text-red-500">{errors.width.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="depth"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Depth (inch)
        </label>
        <input
          id="depth"
          {...register("depth", { required: "Depth is required" })}
          type="number"
          className="mt-1 block w-full dark:text-white rounded-sm outline-none border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.depth && (
          <span className="text-red-500">{errors.depth.message}</span>
        )}
      </div>

      {/* Panel Thickness Dropdown */}
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="panelThickness"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Panel Thickness (mm)
        </label>
        <select
          id="panelThickness"
          {...register("panelThickness", {
            required: "Panel thickness is required",
          })}
          className="block w-full dark:text-white rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="18">18mm</option>
          <option value="16">16mm</option>
          <option value="12">12mm</option>
        </select>
        {errors.panelThickness && (
          <span className="text-red-500">{errors.panelThickness.message}</span>
        )}
      </div>

      {/* Add Shelf Checkbox */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          {...register("addShelf")}
          className="form-tick h-6 w-6 rounded-sm border-gray-300 checked:bg-blue-600 focus:outline-none"
        />
        <label
          htmlFor="addShelf"
          className="text-gray-700 dark:text-gray-300 font-medium"
        >
          Add Shelf
        </label>
      </div>

      {/* Number of Shelves (Conditional) */}
      {addShelf && (
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="numShelves"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Number of Shelves
          </label>
          <input
            id="numShelves"
            {...register("numShelves")}
            type="number"
            className="block w-full outline-none dark:text-white rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate
        </button>
      </div>
    </form>
  );
}

export default CabinetForm;
