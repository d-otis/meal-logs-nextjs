import { render } from "@testing-library/react";
import MealTextArea from "./MealTextArea";

describe("MealTextArea", () => {
  it("renders the textarea", () => {
    const { getByTestId } = render(
      <MealTextArea
        name="snack"
        content="bowl of popcorn"
        setMeals={jest.fn()}
      />
    );

    const textarea = getByTestId("snack-textarea");

    expect(textarea).toBeInTheDocument();
  });
});
