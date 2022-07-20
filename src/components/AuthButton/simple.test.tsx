// tests/components/AuthButton/simple.test.tsx
import { render, screen } from "@testing-library/react";
import AuthButton from "components/AuthButton";
import React from "react";

describe('AuthButton', () => {
  it('can render', () => {
    render(<AuthButton>Login</AuthButton>)

    expect(screen.getByText('Login')).toBeInTheDocument();
  });
})