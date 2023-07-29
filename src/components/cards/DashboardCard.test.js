import { render, screen } from "@testing-library/react";
import DashboardCard from "./DashboardCard";

describe("DashboardCard", () => {
  const title = "Card Title";
  const image = "image.png";
  const stats = "100";

  it("renders the title and stats correctly", () => {
    render(<DashboardCard title={title} image={image} stats={stats} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(stats)).toBeInTheDocument();
  });

  it("renders the image correctly", () => {
    render(<DashboardCard title={title} image={image} stats={stats} />);
    const imageElement = screen.getByAltText(title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", image);
  });
});
