import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "~/pages/login.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { errorMessages } from "vue/compiler-sfc";

// Define routes for testing the router
const routes = [{ path: "/", component: { template: "<div>Home</div>" } }];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

describe("Login Component", () => {
  let wrapper: any;
  let mockRouterPush: any;
  let mockUseCookie: any;
  let mockFetch: any;

  beforeEach(async () => {
    mockRouterPush = vi.fn();
    mockUseCookie = vi.fn(() => ({ value: null }));

    (global as any).$fetch = vi.fn();

    mockFetch = vi.spyOn(global, "$fetch");
    // Mount the Login component
    wrapper = mount(Login, {
      global: {
        plugins: [router],
        mocks: {
          useCookie: mockUseCookie,
        },
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks(); // Reset mocks between tests
  });

  it("renders the login form", () => {
    expect(wrapper.find('[data-testid="login-container"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="login-form"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="login-title"]').text()).toBe("Login");
    expect(wrapper.find('[data-testid="email-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="password-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true);
  });

  it("should login successfully", async () => {
    mockFetch.mockResolvedValue({
      id: 1,
      name: "Test User",
    });

    await wrapper
      .get('[data-testid="email-input"]')
      .setValue("test@example.com");
    await wrapper
      .get('[data-testid="password-input"]')
      .setValue("correctpassword");

    await wrapper.get('[data-testid="login-form"]').trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("/api/auth/login", {
      method: "POST",
      body: {
        email: "test@example.com",
        password: "correctpassword",
      },
    });
  });

  it("renders the login form", () => {
    expect(wrapper.find('[data-testid="login-container"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="login-form"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="login-title"]').text()).toBe("Login");
    expect(wrapper.find('[data-testid="email-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="password-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true);
  });

  it("should show error", async () => {
    mockFetch.mockResolvedValue({
      status: "400",
      errorMessages: "Invalid",
    });

    await wrapper
      .get('[data-testid="email-input"]')
      .setValue("test@example.com");
    await wrapper
      .get('[data-testid="password-input"]')
      .setValue("correctpassword");

    await wrapper.get('[data-testid="login-form"]').trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("/api/auth/login", {
      method: "POST",
      body: {
        email: "test@example.com",
        password: "correctpassword",
      },
    });
  });
});
