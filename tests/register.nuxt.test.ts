import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Register from "~/pages/register.vue";
import { createRouter, createMemoryHistory } from "vue-router";

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

    wrapper = mount(Register, {
      global: {
        plugins: [router],
        mocks: {
          useCookie: mockUseCookie,
        },
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the register form", () => {
    expect(wrapper.find('[data-testid="register-container"]').exists()).toBe(
      true
    );
    expect(wrapper.find('[data-testid="register-form"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="register-title"]').text()).toBe(
      "Register"
    );
    expect(wrapper.find('[data-testid="email-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="password-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="name-input"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true);
  });

  it("should register successfully", async () => {
    mockFetch.mockResolvedValue({
      id: 1,
      name: "Test User",
    });

    await $fetch("/api/auth/register", {
      method: "POST",
      body: {
        email: "test@example.com",
        password: "correctpassword",
        name: "testinglang",
      },
    });
    await wrapper
      .get('[data-testid="email-input"]')
      .setValue("test@example.com");
    await wrapper
      .get('[data-testid="password-input"]')
      .setValue("correctpassword");
    await wrapper.get('[data-testid="name-input"]').setValue("testinglang");

    await wrapper
      .get('[data-testid="register-form"]')
      .trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch).toHaveBeenCalledWith("/api/auth/register", {
      method: "POST",
      body: {
        email: "test@example.com",
        password: "correctpassword",
        name: "testinglang",
      },
    });
  });
});
