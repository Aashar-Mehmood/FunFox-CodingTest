import {
  render,
  fireEvent,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import AddExerciseModal from "./AddExerciseModal";
import { DataContext } from "../../context/DataProvider";

// getByTestId with refrence to Add exercise modal
// if we use screen, it will search in whole body element

describe("Add Exercise Modal", () => {
  let setExercises, modal;

  beforeEach(() => {
    setExercises = jest.fn();
    render(
      <DataContext.Provider value={{ exercises: [], setExercises }}>
        <AddExerciseModal open={true} />
      </DataContext.Provider>
    );
    modal = screen.getByTestId("new exercise modal");
  });

  test("modal is rendered with context", () => {
    expect(modal).toBeInTheDocument();
  });

  test("modal have add exercise form", () => {
    const form = within(modal).getByTestId("add exercise form");
    expect(modal).toContainElement(form);
  });

  test("modal have Create and Cancel Buttons", () => {
    const createBtn = within(modal).getByTestId("create button");
    const cancelBtn = within(modal).getByTestId("cancel button");
    expect(modal).toContainElement(createBtn);
    expect(modal).toContainElement(cancelBtn);
  });

  test("Create Exercise form has all inputs ", () => {
    const form = screen.getByTestId("add exercise form");
    const nameInput = within(form).getByTestId("name");
    const descriptionInput = within(form).getByTestId("description");
    const setsInput = within(form).getByTestId("sets");
    const repsInput = within(form).getByTestId("reps");
    const timeInput = within(form).getByTestId("time");
    const imageInput = within(form).getByTestId("image");
    expect(form).toContainElement(nameInput);
    expect(form).toContainElement(descriptionInput);
    expect(form).toContainElement(setsInput);
    expect(form).toContainElement(repsInput);
    expect(form).toContainElement(timeInput);
    expect(form).toContainElement(imageInput);
  });
});
