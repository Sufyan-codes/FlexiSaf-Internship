Unit Testing
Goal: Test a single component or function in isolation. Tool: Jest + React Testing Library

Example:

// Button.test.jsx import { render, screen } from "@testing-library/react"; import Button from "./Button";

test("renders button text", () => { render(); expect(screen.getByText("Click Me")).toBeInTheDocument(); });

Integration Testing
Goal: Test how components work together. Tool: React Testing Library

Example:

// LoginForm.test.jsx import { render, screen, fireEvent } from "@testing-library/react"; import LoginForm from "./LoginForm";

test("submits username and password", () => { render(); fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "user" } }); fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "pass" } }); fireEvent.click(screen.getByText(/login/i)); expect(screen.getByText(/welcome/i)).toBeInTheDocument(); });

End-to-End (E2E) Testing
Goal: Test the whole app flow in a real browser. Tool: Cypress or Playwright

Example (Cypress):

// login.cy.js describe("Login flow", () => { it("logs in successfully", () => { cy.visit("/login"); cy.get("#username").type("user"); cy.get("#password").type("pass"); cy.get("button[type=submit]").click(); cy.contains("Welcome, user").should("be.visible"); }); });