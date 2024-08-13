import { render } from "@testing-library/react";
import InputForm from "./InputForm";

const meals = {
  breakfast: "eggs",
  lunch: "sandwich",
  dinner: "pasta",
};

describe("InputForm", () => {
  it("renders the main form", () => {
    const { getByTestId } = render(
      <InputForm dailyMeals={meals} date="1999-12-31" setMeals={jest.fn()} />
    );

    const form = getByTestId("form-container");

    expect(form).toBeInTheDocument();
  });

  // todo: deal with this when i've sorted firebase rtdb mocks
  it("renders 3x meal textareas", () => {
    const { getByTestId } = render(
      <InputForm dailyMeals={meals} date="1999-12-31" setMeals={jest.fn()} />
    );

    const breakfastTextArea = getByTestId("breakfast-textarea");
    const lunchTextArea = getByTestId("lunch-textarea");
    const dinnerTextArea = getByTestId("dinner-textarea");

    expect(breakfastTextArea).toBeInTheDocument();
    expect(lunchTextArea).toBeInTheDocument();
    expect(dinnerTextArea).toBeInTheDocument();
  });

  it("fills the meal textareas with the correct content", () => {
    const { getByTestId } = render(
      <InputForm dailyMeals={meals} date="1999-12-31" setMeals={jest.fn()} />
    );

    const breakfastTextArea = getByTestId("breakfast-textarea");
    const lunchTextArea = getByTestId("lunch-textarea");
    const dinnerTextArea = getByTestId("dinner-textarea");

    expect(breakfastTextArea).toHaveValue(meals.breakfast);
    expect(lunchTextArea).toHaveValue(meals.lunch);
    expect(dinnerTextArea).toHaveValue(meals.dinner);
  });

  it("renders the submit button", () => {
    const { getByTestId } = render(
      <InputForm dailyMeals={meals} date="1999-12-31" setMeals={jest.fn()} />
    );

    const submitButton = getByTestId("submit-button");

    expect(submitButton).toBeInTheDocument();
  });

  it("queries the database for existing data", () => {});
});
